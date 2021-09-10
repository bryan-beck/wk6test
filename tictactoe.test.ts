import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('x appears', async () => {

    let cells = await (await driver).findElement(By.id('cell-0'));
    await cells.click();
});

test('x appears-2', async () => {

    let cells = await (await driver).findElement(By.id('cell-2'));
    await cells.click();
});

test('x appears-3', async () => {

    let cells = await (await driver).findElement(By.id('cell-8'));
    await cells.click();
});