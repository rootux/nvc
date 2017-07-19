import React from 'react'
import Emotion from './Emotion'

class Feelings extends React.Component {
    render() {
        return (
            <div>
                <h1>Feelings</h1>
                {this.props.feelings.map(need => <Emotion key={need.name} emotion={need}/>)}
            </div>
        )
    }
}

Feelings.propTypes = {
    feelings: React.PropTypes.array.isRequired
}

export default Feelings