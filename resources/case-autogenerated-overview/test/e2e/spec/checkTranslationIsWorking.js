'use strict';
describe('custom page', function() {
  beforeEach(function(){
    browser.driver.get('http://localhost:3000/bonita');
    browser.manage().addCookie('BOS_Locale', 'fr', '/bonita', null);
  });


  it('should have text translated in french', function() {
    browser.get('http://localhost:3000/bonita/case-autogenerated-overview/index.html?id=2');
    browser.manage().getCookie('BOS_Locale').then(function(cookie) {
      expect(cookie.value).toEqual('fr');
      expect(element(by.tagName('h1')).getText()).toEqual('Identifiant du cas: 2 - Processus: Pool 2');
    });
  });


  it('should have text in default language', function() {
    browser.manage().deleteAllCookies();
    browser.get('http://localhost:3000/bonita/case-autogenerated-overview/index.html?id=2');
    expect(element(by.tagName('h1')).getText()).toEqual('Case id:2 - Process: Pool 2');
  });

});