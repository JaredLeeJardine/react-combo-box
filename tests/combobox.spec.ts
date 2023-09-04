import { test, expect } from '@playwright/test';

test('basic functionality test', async ({ page }) => {
  await page.goto('/');
  const placeholder = 'select a color'
  const firstCombo = page.getByText(placeholder)
  await firstCombo.click()
  const listItem = page.getByText('green')
  await listItem.click()
  await expect(page.getByText('green')).toBeVisible()
  await expect(page.getByText(placeholder)).not.toBeVisible()
});


test('test selecting multiple times', async ({ page }) => {
  await page.goto('/');
  const placeholder = 'select a color'
  let combobox = page.getByText(placeholder)
  await combobox.click()
  const listItem = page.getByText('green')
  await listItem.click()

  await expect(page.getByText('green')).toBeVisible()
  combobox = page.getByText('green')
  await combobox.click()
  const listItem2 = page.getByText('purple')
  await listItem2.click()

  await expect(page.getByText('green')).not.toBeVisible()
  await expect(page.getByText('purple')).toBeVisible()
});

test('isSearchable basic functionality test', async ({ page }) => {
  await page.goto('/?isSearchable=true');
  const placeholder = 'select a color'
  const firstCombo = page.getByText(placeholder)
  await firstCombo.click()
  await expect(page.getByPlaceholder('filter results')).toBeVisible()
  const listItem = page.getByText('green')
  await listItem.click()
  await expect(page.getByText('green')).toBeVisible()
  await expect(page.getByText(placeholder)).not.toBeVisible()
});

test('isSearchable filtration test', async ({ page }) => {
  await page.goto('/?isSearchable=true');
  const placeholder = 'select a color'
  const firstCombo = page.getByText(placeholder)
  await firstCombo.click()
  const filterInput = page.getByPlaceholder('filter results')
  await filterInput.type('re')
  await expect(page.getByText('green')).toBeVisible()
  await expect(page.getByText('purple')).not.toBeVisible()
  await expect(page.getByText('orange')).not.toBeVisible()
  await expect(page.getByText('red')).toBeVisible()
});