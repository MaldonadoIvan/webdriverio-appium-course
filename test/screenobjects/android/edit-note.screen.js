import AddNoteScreen from "../../screenobjects/android/add-note.screen";

class EditNoteScreen {
    get firstNote (){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreIcon(){
        return $('~More');
    }

    get deleteIcon(){
        return $('//*[@text="Delete"]');
    }

    get navIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanItem(){
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial(){
        await AddNoteScreen.skipBtn.click();

        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteBody){
         await AddNoteScreen.addNoteTxt.click();
                await AddNoteScreen.txtOption.click();
                await expect(AddNoteScreen.textEditing).toBeDisplayed();
                
                // add note title
                await AddNoteScreen.noteHeading.addValue(noteHeading);
                // Another way to make this
                /*const noteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
                await noteTitle.setValue("Naruto\nOnePiece\nAOT");*/
            
                // add note body
                await AddNoteScreen.noteBody.addValue(noteBody);
        
                // save the changes
                await AddNoteScreen.saveNote();
    }
}

export default new EditNoteScreen();