import { ColetivePage } from './app.po';

describe('coletive App', () => {
  let page: ColetivePage;

  beforeEach(() => {
    page = new ColetivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cc works!');
  });
});
