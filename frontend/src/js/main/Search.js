import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../../css/searchbar.css'
import { getInformation } from '../../hook'
export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = { loading: false }
    }
    async getData(place) {
        this.setState({ loading: true })
        getInformation(place).then(dat => {
            if (dat.code === -1) this.setState({ loading: false, redirect: '/error' })
            else this.setState({
                loading: false, redirect: '/information', data: {
                    location: place.toUpperCase(),
                    coords: dat.coords,
                    flights: [
                        {
                            carrier: 'American Airlines',
                            from: 'DFW',
                            to: 'LHR',
                            dtime: '2021-4-10T17:00:00',
                            atime: '2021-4-11T01:00:00',
                            price: '$300'
                        },
                        {
                            carrier: 'Southwest Airlines',
                            from: 'DFW',
                            to: 'LAX',
                            dtime: '2021-4-10T17:00:00',
                            atime: '2021-4-11T13:00:00',
                            price: '$350'
                        }
                    ],
                    hotels: [
                        {
                            company: 'Hilton Company',
                            address: '1234 Street Road',
                            price: '$150'
                        }
                    ],
                    food: dat.restaurants
                }
            })
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: this.state.data
            }} />
        }
        return (
            <div id='search-bar'>
                <input id='search-input' type='text' placeholder='Search Destination...' onKeyUp={(key) => {
                    const place = document.getElementById('search-input').value
                    if (key.key === 'Enter' && place) {
                        this.getData(place)
                    }
                }}></input>
            </div>
        )
    }
}