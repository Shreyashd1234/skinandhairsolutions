import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamically resolve server entry relative to this file
const serverPath = resolve(__dirname, "../../dist/server/server.js");

let handler;
async function getHandler() {
  if (!handler) {
    const mod = await import(serverPath);
    handler = mod.default ?? mod;
  }
  return handler;
}

export default async (request, context) => {
  try {
    const h = await getHandler();
    return h.fetch(request, {}, context);
  } catch (e) {
    console.error("SSR function error:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const config = {
  path: "/*",
};
