import axios from 'axios'

const config = {
	baseURL: process.env.VUE_APP_API_URL,
	headers: {
	  Accept: 'application/json',
	  'Content-Type': 'application/json'
	}
  }
  const httpClient = axios.create(config)

  export default httpClient