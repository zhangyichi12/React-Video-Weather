import React, { Component } from 'react';
import _ from 'lodash';

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>
                {(() => _.round(_.sum(props.data) / props.data.length))()} {props.unit}
            </div>
        </div>
    )
}