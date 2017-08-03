import React from 'react'
import Emotion from './Emotion'
import PropTypes from 'prop-types';

class Needs extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                {this.props.needs.map(need => <Emotion key={need.name} emotion={need}/>)}
            </div>
        )
    }
}

Needs.propTypes = {
    needs: PropTypes.array.isRequired
}

export default Needs