import React from 'react'
import Needs from './Needs'
import Feelings from './Feelings'

const ChooseNeedsFeelings = (props) => 
    <div>
        <Needs needs={props.needs} />
        <Feelings feelings={props.feelings} />
    </div>

export default ChooseNeedsFeelings