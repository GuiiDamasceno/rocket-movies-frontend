import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocket-movies-api-ds6z.onrender.com'
})