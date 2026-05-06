import {$, $$, expect, driver} from "@wdio/globals"; //wdio v9 +

describe('Android Element Test',()=>{
    it('Find element by accessibility id', async ()=>{
        // find element by accessibility id
        const appOption = await $('~App');

        // cilck on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('Find element by class name', async ()=>{
        // find element by class name
        const className = await $('android.widget.TextView');

        console.log(await className.getText());

        //Assertion
        await expect(className).toHaveText("API Demos")
    })

    xit('Find elements by Xpath', async ()=>{
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // find by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        // find by class - assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find elements by UIAutomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click()
    });

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views' 
        ]
        const actualList =[]

        //forzar scroll hasta el último elemento, para que se vean los ultimos 2 items de la lista en pantalla. Pero con esta solucion 
        //se pierden los primeros 2  "Access'ibility" y "Accessibility". Mas adelante en el curso en teoria se explicará
         await $(
            'android=new UiScrollable(new UiSelector().scrollable(true))' +
             '.scrollIntoView(new UiSelector().text("Views"))'
         );

        
        //find multiple elements
        const textList = await $$('android.widget.TextView');
        
        // loop through them
        for(const element of textList) {
            actualList.push(await element.getText());
        }

        // assert the list
        await expect(actualList).toEqual(expectedList)

    });

    it.only('Exercise - Text field', async () => {

        const views = await $('//android.widget.TextView[@text="Views"]'); 
        const autoComplete = await $('//android.widget.TextView[@text="Auto Complete"]');
        const screenTop = await $('//android.widget.TextView[@text="1. Screen Top"]');
        const textFieldCountry = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/edit"]');

       /* //Option 2 to obtain the paths
        await $('~Views').click(); //It doesn't work without scroll, we'll see it soon on next courses
        await $('//*[@text="Auto complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();
*/

        await $(
            'android=new UiScrollable(new UiSelector().scrollable(true))' +
             '.scrollIntoView(new UiSelector().text("Views"))'
         );

        // access to the auto complete screen
        await views.click();
        await autoComplete.click();
        await screenTop.click();

        // enter the country name
        await textFieldCountry.click();
        await textFieldCountry.addValue('Argentina');

        //verify the country name
        await expect(textFieldCountry).toHaveText('Argentina');

    });

})