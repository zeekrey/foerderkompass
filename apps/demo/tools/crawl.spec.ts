import { test, expect } from '@playwright/test';

test('Foerderdatenbank - Get Pages', async ({ page }) => {
  await page.goto('https://www.foerderdatenbank.de/SiteGlobals/FDB/Forms/Suche/Foederprogrammsuche_Formular.html?resourceId=0065e6ec-5c0a-4678-b503-b7e7ec435dfd&input_=23adddb0-dcf7-4e32-96f5-93aec5db2716&pageLocale=de&filterCategories=FundingProgram&templateQueryString=&submit=Suchen');

  // Expect a title "to contain" a substring.
  await expect.soft(page).toHaveTitle(/Förderdatenbank - Fördersuche/);

  const list = page.locator('.card');

  expect.soft(list.count).toBeGreaterThan(0);
  const count = await list.count();

  for (let i = 0; i < count; ++i) {
    await list.nth(i).getByRole('link').click()
    
  }

});


