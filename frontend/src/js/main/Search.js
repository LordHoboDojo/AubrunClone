import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../../css/searchbar.css'
import { getInformation } from '../../hook'
const loadTime = 2500;
export class Loader extends Component {
    componentDidMount() {
        this.setState({ loaded: false, loadProgress: 0, loadID: setInterval(() => {
            if (this.state.loadProgress >= 100) {
                clearInterval(this.state.loadID);
                setTimeout(() => {
                    document.getElementById('load-shell').classList.add('hide', 'load-fade');
                    document.getElementById('load-bar').classList.add('hide', 'load-fade');
                    document.getElementById('load-loading').classList.add('hide', 'load-fade');
                    document.getElementById('load-container').classList.add('hide', 'load-fade');
                    setTimeout(() => this.setState({ loaded: true }), 750);
                }, 500);
            } else {
                const progress = 1;
                this.setState({ loaded: this.state.loaded, loadProgress: this.state.loadProgress + progress, loadID: this.state.loadID });
                let load = document.getElementById('load-bar');
                if (load) {
                    load.style.setProperty('--percent', parseInt(getComputedStyle(load).getPropertyValue('--percent')) + progress);
                }
            }
        }, loadTime / 100) });
    }
    render() {
        return (
            <div id='load'>
                <svg id='load-container' width='100%' height='100%'>
                    <circle id='load-shell' className='load-circle' cx='50%' cy='50%' r='20%'></circle>
                    <circle id='load-bar' className='load-circle' cx='50%' cy='50%' r='20%'></circle>
                    <text id='load-loading' x='50%' y='50%' alignmentBaseline='central'>LOADING</text>
                </svg>
            </div>
        )
    }
}
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
                    flights: dat.flights,
                    hotels: dat.hotels,
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
        if (this.state.loading) {
            return <Loader />
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