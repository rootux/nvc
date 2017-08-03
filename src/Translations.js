class Translations {
  static get() {
    return {
      he: {
        dir: 'rtl',
        needsName: 'למה אני זקוק.ה?',
        feelingsName: 'איך אני מרגיש.ה?',
        needs: [
          {
            name: 'חופש',
            values: [
              'עצמאות',
              'אוטונומיה',
              'אחריות',
              'בחירה',
              'גיוון',
              'מקום',
              'מרחב',
              'תנועה'
            ]
          },
          {
            name: 'חגיגת החיים',
            values: [
              'הומור',
              'צחוק',
              'הנאה',
              'התחדשות',
              'חגיגה',
              'משחק',
              'קלות',
              'רווחה',
              'תקווה',
              'יופי'
            ]
          }
        ],
        feelings: [
          {
            name: 'לב פתוח',
            values: [
              'אכפתיות',
              'התרגשות',
              'אהדה',
              'חיבה',
              'חמלה',
              'קירבה',
              'רכות',
              'משיכה',
              'התרחבות',
              'ציפייה'
            ]
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
        dir: 'ltr',
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
}

export default Translations