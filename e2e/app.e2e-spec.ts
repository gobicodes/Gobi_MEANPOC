import { WUCampaignCalendarPage } from './app.po';

describe('wucampaign-calendar App', function() {
  let page: WUCampaignCalendarPage;

  beforeEach(() => {
    page = new WUCampaignCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
