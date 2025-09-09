export default {
  async fetch(request, env) {
    let response = await fetch("https://raw.githubusercontent.com/lightfar125/fame-wall/main/fame-log.txt");
    let text = await response.text();

    return new Response(`
      <html>
        <head><meta charset="utf-8"><title>许光远 Fame Wall</title></head>
        <body style="font-family:serif; background:#f4f4f4; padding:2em;">
          <h1>🌟 Fame Wall of 许光远 Khor Kuang Yen 🌟</h1>
          <pre style="background:white; padding:1em; border-radius:10px;">${text}</pre>
        </body>
      </html>
    `, { 
      headers: { 
        "content-type": "text/html; charset=utf-8"   // ✅ 强制 UTF-8
      }
    });
  }
}
