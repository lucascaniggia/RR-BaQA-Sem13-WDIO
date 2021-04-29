
describe('Wikipedia Search', () => {

    beforeAll('open browser', () => {
        return browser.url('http://google.com');
    });

    it('can handle commands synchronously', () => {
        let value = $('#input');
        expect(value).toExist();
    });

    // it('title', () => {
    //     browser.pause(2000);
    //     expect(browser.getTitle()).toMatch('Wikipedia');
    // });

});