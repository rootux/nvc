import React from 'react'
import Emotion from './Emotion'

class Needs extends React.Component {
    render() {
        return (
            <div>
                <h1>Needs</h1>
                {this.props.needs.map(need => <Emotion key={need.name} emotion={need}/>)}
            </div>
        )
    }
}

Needs.propTypes = {
    needs: React.PropTypes.array.isRequired
}

export default Needs