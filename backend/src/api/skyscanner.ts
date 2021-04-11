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

