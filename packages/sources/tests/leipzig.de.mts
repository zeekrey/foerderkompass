import { chromium } from "playwright";
import assert from "node:assert";

type Entry = {
  name: string;
  description: string;
  type: string;
  purpose: string;
  responsible: string;
  href: string;
};

async function getData() {
  // Setup
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://www.leipzig.de/buergerservice-und-verwaltung/aemter-und-behoerdengaenge/foerdermittelfinder"
  );

  /** Use shift here because the first row is the header row. */
  const items = (await page.getByRole("row").all()).slice(4);

  const res = await Promise.all(
    items.map(async (item) => {
      const _res = item.getByRole("gridcell");

      const name = _res.first();
      const description = _res.nth(1);
      const type = _res.nth(2);
      const purpose = _res.nth(3);
      const responsible = _res.nth(4);

      return {
        name: await name.getByRole("link").innerText(),
        href: await name.getByRole("link").getAttribute("href"),
        description: await description.innerText(),
        type: await type.innerText(),
        purpose: await purpose.innerText(),
        responsible: await responsible.innerText(),
      } as Entry;
    })
  );

  // Teardown
  await context.close();
  await browser.close();

  console.log("Data fetched from Leipzig.de");
  console.log(res);
  return res;
}

await getData();

export { getData };
