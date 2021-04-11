import { Component } from 'react'
import '../../css/error.css'
export default class Error extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div id='error'>
                <div id='error-text'>
                    Oh no! It seems the location you chose doesn't exist. If you feel this is an error, please contact our site administrators.
                </div>
            </div>
        )
    }
}