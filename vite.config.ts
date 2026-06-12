import { defineConfig, type Plugin } from 'vite';
import { WebSocketServer } from 'ws';
import type { WebSocket } from 'ws';
import os from 'node:os';

// Dev-server message relay for phone "grip stations": every message from one
// /grip-ws client is broadcast to all others (game ↔ phones). /grip-info
// reports the LAN address so the game can render a join QR.
function gripRelay(): Plugin {
  return {
    name: 'grip-relay',
    configureServer(server) {
      const wss = new WebSocketServer({ noServer: true });
      const clients = new Set<WebSocket>();
      wss.on('connection', (ws) => {
        clients.add(ws);
        ws.on('message', (data) => {
          const text = data.toString();
          for (const c of clients) if (c !== ws && c.readyState === 1) c.send(text);
        });
        ws.on('close', () => clients.delete(ws));
        ws.on('error', () => clients.delete(ws));
      });
      server.httpServer?.on('upgrade', (req, socket, head) => {
        if (req.url === '/grip-ws') {
          wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
        }
      });
      server.middlewares.use('/grip-info', (_req, res) => {
        let ip = 'localhost';
        for (const list of Object.values(os.networkInterfaces())) {
          for (const n of list ?? []) {
            if (n.family === 'IPv4' && !n.internal && !n.address.startsWith('169.254')) {
              ip = n.address;
              break;
            }
          }
          if (ip !== 'localhost') break;
        }
        const addr = server.httpServer?.address();
        const port = typeof addr === 'object' && addr ? addr.port : 5179;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ip, port }));
      });
    },
  };
}

export default defineConfig(({ command }) => ({
  // Production build is published at danpillay87.github.io/domination/
  base: command === 'build' ? '/domination/' : '/',
  build: { outDir: 'docs' },
  plugins: [gripRelay()],
  resolve: {
    // Project is reached via an NTFS junction from the dev workspace; don't
    // resolve modules back out to the real path or vite treats them as outside root.
    preserveSymlinks: true,
  },
  server: {
    host: true,
    fs: {
      allow: ['.', 'C:/Users/DanPillay/domination-game'],
    },
  },
}));
