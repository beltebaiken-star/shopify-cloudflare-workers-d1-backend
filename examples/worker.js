export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true });
    }

    if (url.pathname === "/courses" && request.method === "GET") {
      const rows = await env.DB
        .prepare("SELECT id, title FROM courses ORDER BY id DESC LIMIT ?")
        .bind(20)
        .all();

      return Response.json({ items: rows.results });
    }

    return new Response("Not found", { status: 404 });
  }
};
