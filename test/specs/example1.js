
describe('Google Search: Wikipedia', () => {

    beforeAll('Open browser', () => {
        return browser.url('http://google.com');
    });

    it('Finding search bar in DOM', () => {
        let searchInput = $('form div:nth-child(1) div.A8SBwf div.RNNXgb div div.a4bIc input');
        expect(searchInput).toExist();
    });

    it('Searching for \'wikipedia\'', () => {
        let searchInput = $('form div:nth-child(1) div.A8SBwf div.RNNXgb div div.a4bIc input');
        searchInput.addValue('wikipedia');

        browser.keys('Enter');
    });

    it('Entering Wikipedia\'s homepage', () => {
        let wikiPage = $('#rso div:nth-child(1) div:nth-child(1) div div.tF2Cxc div.yuRUbf a');
        expect(wikiPage).toExist();
        wikiPage.click();
    });

    it('Validating Wikipedia\'s URL', () => {
        browser.pause(1000);
        expect(browser.getUrl()).toMatch('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });

    it('Validating page\'s title', () => {
        browser.pause(1000);
        expect(browser.getTitle()).toMatch('Wikipedia, la enciclopedia libre');
    });

});