import { resolve, dirname } from "path";

// esbuild injects __filename/__dirname for ESM — use them directly
const serverPath = resolve(dirname(__filename), "../../dist/server/server.js");

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
