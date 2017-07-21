import React from 'react';
import ChooseNeedsFeelings from './ChooseNeedsFeelings';
import LanguageCookie from './LanguageCookie';

class App extends React.Component {

  constructor() {
    super();
    LanguageCookie.set('he');
    
    this.state = {
      he: {
        needsName: 'צרכים',
        feelingsName: 'רגשות',
        needs: [
          {
            name: 'חמלה',
            values: [
              'אמפתיה',
              'חיבוק'
            ]
          },
          {
            name: 'חיבור',
            values: [
              'קהילה',
              'תקשורת'
            ]
          }
        ],
        feelings: [
          {
            name: 'אהבה',
            values: [
              'חגיגת החיים',
              'שמחה']
          },
          {
            name: 'כעס',
            values: [
              'תסכול',
              'אכזבה'
            ]
          }
        ]
      },
      en: {
        needsName: 'Needs',
        feelingsName: 'Feelings',
        needs: [
          { name: 'Compassion',
            values: [
            'empathy',
            'hug']
          },
          { name: 'Connection',
            values: [
            'community',
            'communication']
          },
        ],
        feelings: [
          { name: 'Love',
            values: [
            'celebration of life',
            'joy']
          },
          { name: 'Anger',
            values: [
            'frustration',
            'disappointment']
          },
        ]}
      }
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