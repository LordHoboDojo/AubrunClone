import { Component } from 'react'
import '../../css/information.css'
function parseDate(raw) {
    // 2021-4-10T17:00:00
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const times = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const arr = raw.split('T')
    const d = arr[0]
    const t = arr[1]
    const date_arr = d.split('-')
    const time_arr = t.split(":")
    const time = `${times[parseInt(time_arr[0]) % 12]}:${time_arr[1]} ${(parseInt(time_arr[0]) >= 12) ? "PM" : "AM"}`
    const date = `${month[parseInt(date_arr[1]) - 1]} ${parseInt(date_arr[2])} ${time}`
    return date
}
export class Flight extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const data = this.props;
        return (
            <div className='info-container-item flight'>
                <div className='flight-carrier'><b style={{ color: 'var(--gray1)' }}>Carrier</b><span style={{ float: 'right' }}>{data.carrier}</span></div>
                <div className='flight-from'><b style={{ color: 'var(--gray1)' }}>From</b><span style={{ float: 'right' }}>{data.from}</span></div>
                <div className='flight-to'><b style={{ color: 'var(--gray1)' }}>To</b><span style={{ float: 'right' }}>{data.to}</span></div>
                <div className='flight-dtime'><b style={{ color: 'var(--gray1)' }}>Departure</b><span style={{ float: 'right' }}>{parseDate(data.dtime)}</span></div>
                <div className='flight-atime'><b style={{ color: 'var(--gray1)' }}>Arrival</b><span style={{ float: 'right' }}>{parseDate(data.atime)}</span></div>
                <div className='flight-price'><b style={{ color: 'var(--gray1)' }}>Price</b><span style={{ float: 'right' }}>{data.price}</span></div>
            </div>
        )
    }
}
export class Hotel extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const data = this.props;
        return (
            <div className='info-container-item hotel'>
                <div className='hotel-company'><b style={{ color: 'var(--gray1)' }}>Company</b><span style={{ float: 'right' }}>{data.company}</span></div>
                <div className='hotel-address'><b style={{ color: 'var(--gray1)' }}>Address</b><span style={{ float: 'right' }}>{data.address}</span></div>
                <div className='hotel-price'><b style={{ color: 'var(--gray1)' }}>Price</b><span style={{ float: 'right' }}>{data.price}</span></div>
            </div>
        )
    }
}
export class Food extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const data = this.props;
        let price = ''
        for (let i = 0; i < data.pricing; i += 1) {
            price += '$'
        }
        if (price === '') price = 'Unavailable'
        return (
            <div className='info-container-item food'>
                <div className='food-name'><b style={{ color: 'var(--gray1)' }}>Name</b>   <span style={{ float: 'right' }}>{data.name}</span></div>
                <div className='food-distance'><b style={{ color: 'var(--gray1)' }}>Distance</b>   <span style={{ float: 'right' }}>{data.distance}</span></div>
                <div className='food-rating'><b style={{ color: 'var(--gray1)' }}>Rating</b>   <span style={{ float: 'right' }}>{data.rating}</span></div>
                <div className='food-price'><b style={{ color: 'var(--gray1)' }}>Pricing</b>   <span style={{ float: 'right' }}>{price}</span></div>
                <div className='food-img' style={{ justifyContent: 'center', margin: 0 }}><img style={{ display: 'block', justifyContent: 'center', margin: 'auto', padding: '15px 0px 5px', width: '90%', height: '40%' }} src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${data.icon}&sensor=false&maxheight=250&maxwidth=300&key=${'AIzaSyBV8lnOmU9codUueVoNsS-zAWflAuUAFaE'}`} alt='img'></img></div>
            </div>
        )
    }
}
export default class Information extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        const data = this.props.location.state;
        data.food.sort((a, b) => {
            if (a.name.length >= 27) return 1
            if (b.name.length >= 27) return -1
            if (a.rating !== b.rating) return (a.rating < b.rating) ? 1 : -1
            const d = 24901.92 / 360
            let distancea = Math.sqrt(Math.pow(d * (data.coords.lat - a.coords.lat), 2) + Math.pow(d * (data.coords.lng - a.coords.lng), 2))
            let distanceb = Math.sqrt(Math.pow(d * (data.coords.lat - b.coords.lat), 2) + Math.pow(d * (data.coords.lng - b.coords.lng), 2))
            return (distancea < distanceb) ? -1 : 1;
        })
        const flights = []
        const hotels = []
        const food = []
        let i = 0
        for (let flight of data.flights) {
            flights.push(<Flight key={`flight_${i}`} carrier={flight.carrier} from={flight.from} to={flight.to} dtime={flight.dtime} atime={flight.atime} price={flight.price}/>);
            i += 1
        }
        i = 0
        for (let hotel of data.hotels) {
            hotels.push(<Hotel key={`hotel_${i}`} company={hotel.company} address={hotel.address} price={hotel.price} />)
            i += 1
        }
        i = 0
        for (let r of data.food) {
            if (i >= 12) break
            const d = 24901.92 / 360

            let distance = Math.sqrt(Math.pow(d * (data.coords.lat - r.coords.lat), 2) + Math.pow(d * (data.coords.lng - r.coords.lng), 2))
            distance = `${distance.toFixed(2)} mi`
            food.push(<Food key={`food_${i}`} name={r.name} distance={distance} rating={r.rating} pricing={r.price_level} icon={r.icon}/>)
            i += 1
        }
        return (
            <div id='information'>
                <div id='info-loc'>{data.location}</div>
                <div id='info-coords' onClick={() => {
                    window.open(`https://www.google.com/search?q=${`${data.coords.lat}°, ${data.coords.lng}°`}`, '_blank')
                }}>{data.coords.lat}°, {data.coords.lng}°</div>
                <div className='info-title'>Available Flights</div>
                <div id='info-flights' className='info-container'>{flights}</div>
                <div className='info-title'>Available Hotels</div>
                <div id='info-hotels' className='info-container'>{hotels}</div>
                <div className='info-title'>Recommended Restaurants</div>
                <div id='info-food' className='info-container'>{food}</div>
            </div>
        )
    }
}