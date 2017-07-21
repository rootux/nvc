import * as Cookies from 'js-cookie';

class LanguageCookie {
  static get() {
    return Cookies.get('language');
  }
  static set(languageCode) {
    Cookies.set('language', languageCode);
  }
}

export default LanguageCookie