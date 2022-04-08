
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe('test for duel duo', () => {

    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })
    
    test('expecting draw button to reveal draw' , async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(2000)
        const popUp = await driver.findElement(By.id('choices'))
        const displayed = await popUp.isDisplayed()
        expect(displayed).toBe(true)
    })

    // test('for see all bots', async () => {
    //     await driver.findElement(By.id('see-all')).click()
    //     const allBots = await driver.findElement(By.id('all-bots'))
    //     expect(allBots)
    
    // })

        test('clicking add duo',async () => {
            await driver.findElement(By.id('draw')).click()
            await driver.sleep(2000)
            await driver.findElement(By.xpath('(//button[text()= "Add to Duo"])[1]')).click()
            const addToDuo = await driver.findElement(By.id('player-duo'))
            const added = await addToDuo.isDisplayed()
            expect(added).toBe(true)

        })

})

