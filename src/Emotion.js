import React from 'react'
import PropTypes from 'prop-types';

class Emotion extends React.Component {
  render() {
    let emotion = this.props.emotion;
    return (
      <div>
        <b>
          {emotion.name}
        </b>&nbsp;
        {emotion.values.map(subEmotion => <SubEmotion key={subEmotion}>{subEmotion}</SubEmotion>)}
      </div>
    )
  }
}

Emotion.propTypes = {
    emotion: PropTypes.object.isRequired
}

const SubEmotion = (props) => <span>{props.children}&nbsp;</span>

export default Emotion