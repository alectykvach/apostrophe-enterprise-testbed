let counter = 0;

module.exports = (pageName) => {
  counter++;

  return {
    [`[${counter}] make subpage "${pageName}"`]: function(client) {
      const pageMenuBtnSelector = '.apos-context-menu .apos-button';
      const pageMenuDropdownSelector = '.apos-context-menu .apos-dropdown-items';
      const pageMenuCreatePageSelector = '.apos-context-menu .apos-dropdown-items .apos-dropdown-item:first-child';
      const modalDialogSelector = '.apos-modal.apos-modal-slideable';
      const inputTitleSelector = '.apos-field-input';
      const saveBtnSelector = '[data-apos-save]';

      client.click('body');
      client.click(pageMenuBtnSelector);
      client.waitForElementVisible(pageMenuDropdownSelector, 1000);
      client.click(pageMenuCreatePageSelector);
      client.waitForElementVisible(modalDialogSelector, 2000);
      client.clearValue(inputTitleSelector);
      client.setValue(inputTitleSelector, pageName);
      client.click(saveBtnSelector);
      client.pause(1000);
    }
  };
};
