# DOMINATION — build plan

Recreation (faithful but lifted) of the **Domination** game from *Never Say Never Again* (1983) —
the tabletop video-game duel where Bond plays Maximillian Largo at the Monte Carlo casino and the
machine electro-shocks the losing player. Personal project, local-first, software only for v1.
Hardware "Largo Edition" with a real (safe) shock feature proposed as a separate track.

---

## 1. Source research (canon to honour)

**Film:** Never Say Never Again (1983, non-Eon Bond, Connery vs Klaus Maria Brandauer as Largo).
**The game:** "Domination" — Largo claims he designed it himself and has never found a worthy
adversary. Played seated at opposite ends of an ornate long table, each player at a console; a
central screen relays 3-D graphics into the space between them.

**Canon mechanics (as seen / described on screen):**
- The machine picks target countries "at random"; a 3-D world map zooms into the chosen country.
- Target zones illuminate on the country map — first to hit them with a joystick-controlled
  **laser** scores points.
- **Left hand controls two nuclear missiles; right hand controls a defensive shield** that blocks
  incoming missiles. An unblocked missile strike ends the game.
- Winnings are denominated in dollars. The **canon stakes ladder**:
  - Spain — **$9,000**
  - Japan — **$16,000**
  - United States — **$42,000**
  - Rest of the World — **$325,000**
- **The pain mechanic:** the grip handles shock the player who is losing; shock level scales with
  the stake. Releasing the grips to escape the pain forfeits the game. Bond is knocked to the
  floor in the USA round, then wins "the rest of the world" when Largo can't endure it and lets go.

**Art direction (the look to reproduce):**
- The graphics were built physically by David Dryer's effects team: **wire models (including a
  terrestrial globe) lit with laser light**, slit-scan photography, scratched-glass linework and
  multi-pass krypton-laser exposure, matted over live action for months in post.
- Net visual language: **glowing wireframe vector graphics** — laser-orange/red vs cyan/blue
  teams, a rotating wireframe globe, missile trails, burst effects, dollar counters, deep black
  field. Closer to Battlezone/Star Wars vector arcade than raster sprites.
- Live action shot at Waddesdon Manor (rococo room) — hence the "casino night" framing idea below.

---

## 2. V1 — software-only local build ("true but lifted")

### Stack
- **Vite + TypeScript**, single-page app, zero backend for v1. `npm run dev` and play.
- **Three.js** for the game field — the film's look is genuinely 3-D laser wireframe, and
  `LineSegments` + additive blending + **UnrealBloomPass** nails the krypton-laser glow cheaply.
- Custom **CRT post shader** (scanlines, slight barrel distortion, vignette, phosphor persistence,
  faint chromatic aberration) — toggleable, because purists exist.
- DOM/Canvas overlay for HUD: dollar counters (flip-digit style), stakes marquee, grip meters.
- **WebAudio** for all sound (synthesised, no asset weight).
- State machine architecture: `ATTRACT → STAKES → COUNTRY_ZOOM → DUEL → SHOCK_RESOLVE → LADDER →
  GAME_OVER`. Deterministic sim tick (fixed 60 Hz logic, rendered at vsync) — this also makes
  online multiplayer (Phase 5) and replays cheap later.

### Game design — faithful core, lifted where the film is vague
Each **round = one country** at the canon stake. A round is a ~45–60 s real-time duel:

1. **Country zoom** — wireframe globe spins, zooms into the target country rendered as glowing
   border linework. Stake displayed in big seven-segment dollars.
2. **Laser phase (points)** — target zones illuminate at random positions on the country map.
   Right-stick reticle, fire to claim. Each claim = points + small power gain.
3. **Missile duel (sudden death threat)** — left hand launches up to **two missiles** (limited,
   recharge slowly); they arc across the map toward the opponent's base node. The **defender's
   right hand drags a shield arc** to intercept. An unblocked missile = instant round loss,
   regardless of points. Otherwise, highest points when the clock expires takes the round.
4. **The shock** — loser takes "pain" scaled to the stake:
   - Screen-side: white-hot flash on the loser's half, violent screen shake, audio hit,
     gamepad **rumble** at intensity ∝ stake (the software analogue of the shock).
   - **Grip mechanic (the design centrepiece):** both players must *hold* their grip inputs
     (keyboard keys / gamepad triggers) at all times. During a shock window the losing player can:
     **endure** — keep holding while their controls jitter/degrade and an endurance meter drains —
     or **release** and forfeit the match. Endurance carries between rounds, so early losses make
     the $325,000 round genuinely scary. This is the film's psychology translated to software.
5. **Ladder** — Spain → Japan → USA → Rest of the World. Optional "extended ladder" mode inserts
   extra countries with interpolated stakes.

**AI opponent — "LARGO":** confident, plays near-optimally in early rounds, taunts via on-screen
telex-style text (original writing, paraphrase the vibe — don't lift film dialogue verbatim).
Difficulty knob = reaction latency + shield prediction error + endurance pool. Scripted crack in
his endurance curve at maximum stakes so a gutsy player can out-endure him, like the film.

**Local multiplayer (v1):** two gamepads (ideal — left stick missiles, right stick shield/laser,
both triggers = grips, rumble = shock) or split keyboard. Same-screen, facing layout mirrored
top/bottom like the table.

### Presentation
- **Attract mode**: AI vs AI demo loop with rotating globe title screen — "DOMINATION" in laser
  lettering, "INSERT COIN" prompt, like a real '83 cabinet.
- **Cabinet bezel UI**: the page chrome is the ornate table — dark wood/brass frame around the
  CRT viewport. Responsive: bezel collapses on small screens; mobile gets touch twin-stick +
  hold-to-grip thumb pads (landscape).
- **Audio**: low synth ostinato that rises a semitone per rung of the ladder; geiger-tick tension
  layer ∝ stake; telemetry blips; huge alarm + noise burst on shock; bit-crushed announcer voice
  ("Spain. Nine thousand dollars.") via SpeechSynthesis through a WaveShaper, or pre-render a
  posh announcer with the elevenlabs-api skill into static assets. Music bed: Legrand-ish
  disco-orchestral/synth funk loop, procedurally sequenced in WebAudio.

### Best-practice checklist
- TypeScript strict, ESLint + Prettier, Vitest for the sim core (the fixed-tick logic is pure and
  trivially testable: missile intercept maths, endurance drain, AI decisions).
- Sim/render separation (logic never touches Three.js objects directly).
- 60 Hz fixed timestep with accumulator; input sampled per tick.
- Settings persisted to localStorage (CRT on/off, volume, difficulty, control remap).
- Accessibility: photosensitivity mode (caps flash intensity), remappable keys, colourblind-safe
  team palettes (orange/cyan already good).
- Pause/quit guard — releasing grips is a *game* event, not Escape.

### Milestones
1. **Playable core** — duel loop vs AI, keyboard, flat placeholder vectors. (one weekend)
2. **Art pass** — globe, country zoom, bloom + CRT shader, stakes ladder, attract mode.
3. **Audio + feel** — synth score, announcer, gamepad + rumble shock, endurance tuning.
4. **Local 2P + polish** — bezel, settings, photosensitivity, mobile touch.
5. **Online + identity** — see §4.
6. **Largo Edition hardware** — see §3.

---

## 3. "Largo Edition" — the hardcore (simple) shock build

Three tiers, escalating commitment. **Never DIY a shock circuit** — tier 3 only ever hacks the
*trigger* of a certified, current-limited, electrically isolated device.

- **Tier 0 — rumble (already in v1):** Gamepad Haptics API, intensity ∝ stake. Free.
- **Tier 1 — vibration grips:** ESP32 + 2 coin/ERM motors per player epoxied into 3D-printed grip
  handles (one pair per player, like the film's consoles). Browser talks to the ESP32 over
  **Web Serial** (Chrome, zero install) or a 20-line WebSocket bridge. PWM intensity 0–100.
  Cheap (~£15/player), startling enough, zero risk.
- **Tier 2 — the real deal, done safely:** an **off-the-shelf TENS/EMS unit** (medically
  certified, isolated, current-limited — the same class of kit the PainStation art installation
  used for years). The hack is *trigger-only*: ESP32 + optocoupler wired across the unit's pulse
  button, or a relay on its electrode circuit. Electrode pads embedded in the grip handles
  (conductive foil), **one isolated channel per player**.
  **Hard safety rules, non-negotiable:**
  - Intensity ceiling is set physically on the TENS unit's own knob, ever software-raisable.
  - Electrodes on **one hand/forearm only — current path never across the chest**.
  - No participants with pacemakers/heart conditions/epilepsy/pregnancy; verbal opt-in per match.
  - Big red physical kill switch in series; software duty-cycle cap (≤500 ms pulse, cooldown).
  - Two separate TENS units — never share a device between players.
- **Protocol** (shared by tiers 1–2): browser → bridge → `SHOCK <player> <intensity 0-100> <ms>`,
  plus `GRIP <player> <held|released>` coming back the other way if the grips get touch/pressure
  sensors (capacitive pad on the ESP32 — then *physically letting go* forfeits, exactly like the
  film. This is the single best hardware feature: build grip-sense before shock.)

---

## 4. Multiplayer + sign-in (existing infra)

Use **Supabase** (already in the toolbelt — MCP, auth patterns, RLS habits all established):
- **Auth:** Supabase Auth with the **Google provider** — one-tap sign-in, no password flow to
  build. Anonymous "guest at the table" mode for instant play.
- **Online 1v1:** Supabase **Realtime channels** as the transport. The deterministic fixed-tick
  sim makes this easy: exchange inputs per tick (lockstep with a 2–3 tick delay buffer) — at
  2 players × 60 Hz × tiny payloads this is well within Realtime's envelope. Challenge links
  (`/table/<room-id>`), casino lobby listing open tables.
- **The World Domination Ledger:** Postgres table of lifetime winnings ($ won at each rung),
  RLS so players write only their own rows. Leaderboard ranked by career winnings — but high-score
  entry is **3-letter initials over the Google identity**, arcade style.
- Latency reality check: lockstep across the Atlantic will feel rubbery; fine for a personal
  project between friends in the UK. If it ever matters, promote one client to authoritative host.

---

## 5. Other retro ideas (pick and choose)

- **Casino Night mode** — tournament bracket for 4–8 players passing the pads, marquee names,
  running pot, black-tie dress code optional.
- **Double or quits** — after any round, loser may demand the next rung at 2× stake and 2× shock.
- **Screen-burn easter egg** — leave attract mode running 10 min and the globe "burns in".
- **Coin-up** — press a key to "insert coin", mechanical clunk sample, credits counter.
- **Replay theatre** — deterministic sim = free replays; save the $325,000 round, share the file.
- **Unlockable palettes** — krypton red/cyan (canon), green phosphor, amber monochrome.
- **Reachy integration gag** — Reachy announces rounds at the table like a croupier.

## IP note
Personal/local project: fine. If it ever goes public, rename (e.g. "WORLD DOMINATION DUEL"),
keep all text original (no film dialogue), and the vector aesthetic is style, not asset — safe.
