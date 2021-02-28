const { City, Place } = require('./models')
const addCity = async (req, res) => {
  const { city } = req.body

  let _city = new City({
    city,
  })

  _city = await _city.save()

  res.send(_city)
}

const getCities = async () => {
  const results = await City.find({})

  return results
}

const addPlace = async (place, cityId) => {
  let _place = new Place({
    place,
    cityId,
  })

  await _place.save()

  return _place
}

const getPlaces = async (cityId) => {
  const results = Place.find({ cityId })
  return results
}

module.exports = { addCity, getCities, addPlace, getPlaces }
