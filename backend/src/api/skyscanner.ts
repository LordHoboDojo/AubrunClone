import axios from 'axios'

//var apiKey = '436a27af5amshdee44385cd567fbp17d8c8jsn725d95d565a4'
export async function getFlights(country: string, currency: string, locale: string, originPlace: string, destinationPlace: string, outboundPartialDate: string, inboundPartialDate: string) {
  var toReturn = {}
  await axios.get(`http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundPartialDate}/${inboundPartialDate}?apikey=prtl6749387986743898559646983194`).then((data: any) => {
    toReturn = data.data.Quotes;
  });
  toReturn = { ...toReturn }
  console.log(toReturn)
}
export async function getFlights2(originPlace: string,destinationPlace: string,departureDate: string,returnDate: string,airlineCode: string){
  var options = {
    headers : {
        "type": "amadeusOAuth2Token",
            "username": "kkshaunak@gmail.com",
            "application_name": "HackathonAuburn",
            "client_id": "SFDyOxzjqFubii6ZudPlg0Him1yZ5fsp",
            "token_type": "Bearer",
            "access_token": "kE9s3zLaAaIcnAe1FwLLYmOCMWXu",
            "expires_in": 1799,
            "state": "approved",
            "scope": ""
  }};
  axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originPlace}&destinationLocationCode=${destinationPlace}&departureDate=${departureDate}&adults=1&includedAirlineCodes=${airlineCode}&max=10`, options).then((data:any) =>{
    console.log(data);
  });
}
