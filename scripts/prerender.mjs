// Runs after `npm run build` to pre-render index.html from the SSR server.
// Netlify then serves this as a static SPA shell — TanStack Router handles
// client-side navigation for all routes.

import { writeFileSync } from "fs";

console.log("Pre-rendering index.html...");

let html;
try {
  const { default: server } = await import("../dist/server/server.js");
  const req = new Request("http://localhost/");
  const res = await server.fetch(req, {}, {});
  html = await res.text();
  console.log("SSR render OK — status:", res.status);
} catch (e) {
  console.error("SSR render failed:", e.message);
  process.exit(1);
}

writeFileSync("dist/client/index.html", html, "utf-8");
console.log("Written dist/client/index.html ✓");
