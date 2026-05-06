const ListScreen = require('../../screenobjects/ios/list.screen');

describe('Todo List', () => {
  it('Create a Todo List', async () => {
    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.addValue("Things to do today");
    await ListScreen.createBtn.click();

    await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();


    // Create Todo Item
    await $("~Things to do today").click();
    await $("//*[@name='Create item']").click();
    await $("//*[@value='Title").addValue("Buy Groceries");
    await $("//*[@value='Due").click();
    await $("~Thursday, December 11").click();
    await $("~Done").click();
    await $("~Create").click();
    
    // Assertion
    await expect($("Buy Groceries")).toBeExisting();
    await expect($("~Due December 11, 2025")).toBeExisting();

  });
});