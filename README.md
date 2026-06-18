# node-next-ssr

Minimal **Next.js SSR** test fixture.

- `next.config.js` — **present**
- `package.json` `start` script — **present** (`next start`)
- `pages/index.js` uses `getServerSideProps` → genuine **server-side rendering**

## Expected detection
- Language: Node
- Framework: Next.js
- Mode: **SSR** (needs a long-running server)
- Start command: resolves to `npm start` → `next start`

## Run
```bash
npm install
npm run build
npm start
```
