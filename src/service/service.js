/**
 * Created by guohaifeng on 17/4/16.
 */
import React, { Component } from 'react';

class Service extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true,
        }
    }

    render() {
        const ok = 'oklalal'
        return (
            <div>
                <strong>this is guohaifeng</strong><br/>
                <strong>show: {this.state.show}</strong><br/>
                <strong>ok: {ok}</strong>
            </div>
        )
    }
}

export default Service;
