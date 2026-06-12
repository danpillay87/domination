import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    // Project is reached via an NTFS junction from the dev workspace; don't
    // resolve modules back out to the real path or vite treats them as outside root.
    preserveSymlinks: true,
  },
  server: {
    fs: {
      allow: ['.', 'C:/Users/DanPillay/domination-game'],
    },
  },
});
