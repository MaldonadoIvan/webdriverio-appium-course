describe('Add Notes', () => {
    it('Skip tutorial', async() => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
        .click();

        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });
    
    it('add a note, save changes & verify note', async () => {
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
        
        // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        .setValue("Fav Anime List");
        // Another way to make this
        /*const noteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
        await noteTitle.setValue("Naruto\nOnePiece\nAOT");*/
    
        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .setValue("Naruto\nOnePiece\nAOT");

        // save the changes
        await driver.back();
        await driver.back();

        // assertions
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
            .toBeDisplayed();
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText("Naruto\nOnePiece\nAOT");
    });

    it('Delete a note & check the note in trash can', async () => {
       await driver.back();
       
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
        .getText();        
        
        // click on the note
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
        .click()

        // click on more icon
        await $('~More').click();

        // click on Delete item
        await $('//*[@text="Delete"]').click();

        // accept alert
        await driver.acceptAlert();

        // click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        // click on trash can item
        await $('//*[@text="Trash Can"]').click();

        // assertions
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');

        await expect(trashCanItem).toHaveText(note);
/*
        await $('//*[@text="Fav Anime List"]').click();
        await $('//*[@content-desc="More"]').click();
        await $('//*[@text="Delete"]').click();
        await $('//*[@text="OK"]').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click(); 
        await $('//*[@text="Trash Can"]').click();
        await expect ($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'))
            .toHaveText("Fav Anime List");*/
    });



});