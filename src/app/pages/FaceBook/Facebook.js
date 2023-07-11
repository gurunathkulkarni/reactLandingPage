import React, { Component } from 'react'
import FbIframe from '../../components/FbIframe/FbIframe'

export default class FaceBook extends Component {
    render() {
        return (
            <div>
                <FbIframe
                    width= "1000"
                    height="1000"
                />
            </div>
        )
    }
}
