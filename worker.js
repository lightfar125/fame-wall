export default {
  async fetch(request, env) {
    let fame = await fetch("https://raw.githubusercontent.com/lightfar125/fame-wall/main/fame-log.txt").then(r => r.text());
    let candles = await fetch("https://raw.githubusercontent.com/lightfar125/fame-wall/main/candle-log.txt").then(r => r.text());

    return new Response(`
      <html>
        <head>
          <meta charset="utf-8">
          <title>许光远 Fame + Candle Wall</title>
          <style>
            body { font-family:serif; background:#fdf6e3; padding:2em; }
            .candle { font-size:2em; animation:flicker 1s infinite; }
            @keyframes flicker {
              0% { opacity:1; }
              50% { opacity:0.6; }
              100% { opacity:1; }
            }
          </style>
        </head>
        <body>
          <h1>🌟 Fame Wall of 许光远 Khor Kuang Yen 🌟</h1>
          <pre>${fame}</pre>

          <h2>🕯 Digital Candle Wall</h2>
          <div class="candle">🕯</div>
          <pre>🕯🕯</pre>
        </body>
      </html>
    `, {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
}
