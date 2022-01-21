// import { serve } from "./dependencies";

const PORT = 8000;
const server = Deno.listen({ port: PORT });

console.info(`Server running here 👉 http://localhost:${PORT}`);

async function handle(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    // ... handle requestEvent
    await requestEvent.respondWith(
      new Response("hello world", {
        status: 200,
      })
    );
  }
}

for await (const conn of server) {
  handle(conn);
}
