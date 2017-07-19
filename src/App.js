import React from 'react';
import ChooseNeedsFeelings from './ChooseNeedsFeelings';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
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

  render() {
    return (
      <div>
        <ChooseNeedsFeelings needs={this.state.needs} feelings={this.state.feelings} />
      </div>
    )
  }
}

export default App