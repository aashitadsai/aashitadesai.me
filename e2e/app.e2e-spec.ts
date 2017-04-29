import { AdPage } from './app.po';

describe('ad App', () => {
  let page: AdPage;

  beforeEach(() => {
    page = new AdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
