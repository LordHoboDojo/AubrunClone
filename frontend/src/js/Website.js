import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchBar from './main/Search'
import Information from './main/Information'
import '../css/website.css'
export default class Website extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div id='website'>
                <Switch>
                    <Route path='/geolocation'><div>ENABLE GEOLOCATION</div></Route>
                    <Route path='/information' render={(props) => <Information {...props} /> }/>
                    <Route path='/*'><SearchBar /></Route>
                </Switch>
            </div>
        )
    }
}