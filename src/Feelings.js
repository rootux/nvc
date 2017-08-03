import React from 'react'
import Emotion from './Emotion'
import PropTypes from 'prop-types';

class Feelings extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                {this.props.feelings.map(need => <Emotion key={need.name} emotion={need}/>)}
            </div>
        )
    }
}

Feelings.propTypes = {
    feelings: PropTypes.array.isRequired
}

export default Feelings