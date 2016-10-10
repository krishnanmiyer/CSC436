import { Assignment4Page } from './app.po';

describe('assignment-4 App', function() {
  let page: Assignment4Page;

  beforeEach(() => {
    page = new Assignment4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
