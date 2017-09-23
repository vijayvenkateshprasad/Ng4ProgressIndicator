import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link) {
    return browser.get(link);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageTitle(){
    return element(by.css("h2")).getText();
  }
}
