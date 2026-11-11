// Fotografa cada tela do deck (modo apresentação) e gera o PDF (modo ?pdf=1).
// uso: node fonte/capturas.mjs <url-base> <pasta-de-saída> [pdf]
import { chromium } from "/Users/caiquebecker/ariuno-site/node_modules/playwright/index.mjs";
const [base, out, modo] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
await p.addInitScript(() => { try { localStorage.setItem("codice_acesso_v1", "{}"); } catch (e) {} });
if (modo === "pdf") {
  await p.goto(base + "?pdf=1", { waitUntil: "networkidle" });
  await p.waitForTimeout(1500);
  await p.pdf({ path: out, width: "1600px", height: "900px", printBackground: true, preferCSSPageSize: true });
  console.log("pdf", out);
} else {
  const erros = [];
  p.on("pageerror", (e) => erros.push(e.message));
  for (let k = 1; k <= 15; k++) {
    await p.goto("about:blank");
    await p.goto(base + "#" + k, { waitUntil: "load" });
    await p.waitForTimeout(k === 1 ? 2600 : 3000);
    await p.screenshot({ path: `${out}/t${String(k).padStart(2, "0")}.png` });
  }
  console.log("ok", erros.length ? erros : "sem erros");
}
await b.close();
