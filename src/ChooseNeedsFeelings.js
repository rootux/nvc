import React from 'react'
import Needs from './Needs'
import Feelings from './Feelings'

const ChooseNeedsFeelings = (props) =>
    <div>
        <Needs needs={props.needs} name={props.needsName} />
        <Feelings feelings={props.feelings} name={props.feelingsName}/>
    </div>

export default ChooseNeedsFeelings