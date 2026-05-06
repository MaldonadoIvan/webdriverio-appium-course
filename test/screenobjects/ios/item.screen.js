class ItemScreen {
  get createItem() {
    return $('//*[@name="Create item"]');
  }

  get title() {
    return $('//*[@value="Title"]');
  }

  get dueDate() {
    return $('//*[@value="Due"]');
  }

  get datePicker() {
    return $('~Date Picker');
  }

  get secondWindow() {
    return $('//XCUIElementTypeWindow[@index=2]');
  }

  get createBtn() {
    return $('~Create');
  }

  getByAccessibility(){
    return $('');
  };


}

export default new ItemScreen();