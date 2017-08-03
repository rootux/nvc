import React from 'react';
import ChooseNeedsFeelings from './ChooseNeedsFeelings';
import LanguageCookie from './LanguageCookie';
import Translations from './Translations';

class App extends React.Component {

  constructor() {
    super();
    LanguageCookie.set('he');
    
    this.state = Translations.get();
  }

  render() {
    return (
      <div>
        <ChooseNeedsFeelings needs={this.state[LanguageCookie.get()].needs}
        feelings={this.state[LanguageCookie.get()].feelings}
        needsName = {this.state[LanguageCookie.get()].needsName} 
        feelingsName = {this.state[LanguageCookie.get()].feelingsName} 
        />
      </div>
    )
  }
}

export default App