import handler from "../../dist/server/server.js";

export default async (request, context) => {
  return handler.fetch(request, {}, context);
};

export const config = {
  path: "/*",
};
