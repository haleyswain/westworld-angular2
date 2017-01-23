import { WestworldPage } from './app.po';

describe('westworld App', function() {
  let page: WestworldPage;

  beforeEach(() => {
    page = new WestworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
