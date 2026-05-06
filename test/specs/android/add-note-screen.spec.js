import AddNoteScreen from "../../screenobjects/android/add-note.screen";

describe('Add Notes', () => {
    it('Skip tutorial', async() => {
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });
    
    it('add a note, save changes & verify note', async () => {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.txtOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();
        
        // add note title
        await AddNoteScreen.noteHeading.addValue("Fav Anime List");
        // Another way to make this
        /*const noteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
        await noteTitle.setValue("Naruto\nOnePiece\nAOT");*/
    
        // add note body
        await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

        // save the changes
        await AddNoteScreen.saveNote();

        // assertions
        await expect (AddNoteScreen.editBtn).toBeDisplayed();
        await expect (AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
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