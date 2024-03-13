import { test, expect } from '@playwright/test';
import User from '../Models/UserInit';

test('should be able to add a new todo', async ({ page }) => {

    const user = new User();

    await page.goto('/signup');
    await page.fill('[data-testid=first-name]', user.getFirstName())
    await page.fill('[data-testid=last-name]', user.getLastName());
    await page.fill('[data-testid=email]', user.getEmail());
    await page.fill('[data-testid=password]', user.getPassword());
    await page.fill('[data-testid=confirm-password]', user.getPassword());
    await page.click('[data-testid=submit]');
    
    const welcomeMessage = page.locator('[data-testid=welcome]');
    await expect(welcomeMessage).toBeVisible();
});