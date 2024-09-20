const axios = require('axios');
const mapArrayToString = require('../mapArrayToString')

const getData = async () => {
    try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users') 
        const usersIds = responce.data.map(user => user.id)
        return mapArrayToString(usersIds)
        // const usersCities = responce.data.map(user => `${user.name} from ${user.address.city}`)
    } catch (e) {

    }
}
module.exports = getData