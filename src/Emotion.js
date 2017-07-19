import React from 'react'

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
    emotion: React.PropTypes.string.isRequired
}

const SubEmotion = (props) => <span>{props.children}&nbsp;</span>

export default Emotion