import { Component } from 'react'
import '../../css/searchbar.css'
export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div id='search-bar'>
                <input id='search-input' type='text' placeholder='Search Destination...'></input>
            </div>
        )
    }
}