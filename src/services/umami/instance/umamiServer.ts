import Axios from 'axios'

const UMAMI_URL = process.env.UMAMI_URL

const headers = { 'Content-Type': 'application/json' }

const umamiServer = Axios.create({
  baseURL: UMAMI_URL,
  headers
})

export default umamiServer
