import { Component } from 'react'
import SearchBar from './main/Search'
import '../css/website.css'
export default class Website extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div id='website'>
                <SearchBar />
            </div>
        )
    }
}