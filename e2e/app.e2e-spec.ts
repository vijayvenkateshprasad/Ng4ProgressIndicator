import { AppPage } from './app.po';

describe('my-cli-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('celerio page should display "celerio"', () => {
    page.navigateTo("/");
    expect(page.getPageTitle()).toEqual('Celerio');
  });

  it('swift page should display "Swift"', () => {
    page.navigateTo("/maruti/swift");
    expect(page.getPageTitle()).toEqual('Swift');
  });
});
