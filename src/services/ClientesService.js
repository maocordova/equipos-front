import httpClient from '../helper/httpClient'

export default {
    get () {
        return httpClient.get('api/clientes')
    }
}