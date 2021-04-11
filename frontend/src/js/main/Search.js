import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../../css/searchbar.css'
export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = { loading: false }
    }
    getData() {
        if (!navigator.geolocation) {
            this.setState({ redirect: '/geolocation' })
            return
        }
        console.log(navigator.geolocation);
        this.setState({
            loading: true, redirect: '/information', data: {
                location: 'Los Angeles, California, United States of America',
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
                food: [
                    {
                        restaurant: 'Layne\'s Chicken Fingers',
                        distance: '3.4 mi',
                        rating: '⭐⭐⭐⭐⭐'
                    }
                ]
            }
        })
        console.log('Searching...');
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
                    if (key.key === 'Enter') {
                        this.getData()
                    }
                }}></input>
            </div>
        )
    }
}