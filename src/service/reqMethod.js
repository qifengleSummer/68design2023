import axios from 'axios'

const port = 9881
const baseUrl = `http://localhost:${port}`

const instance = axios.create({
  timeout: 1000,
})

// Add a request interceptor
instance.interceptors.request.use(
  (response) => {
    // Do something before request is sent
    return response
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status !== 200) return Promise.reject(response)
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

const apiGet = ({ url, params }) => {
  return new Promise((resolve, reject) => {
    instance
      .get(`${baseUrl}${url}`, { params })
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
const apiPost = ({ url, params }) => {
  return new Promise((resolve, reject) => {
    instance
      .post(`${baseUrl}${url}`, params)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export { apiGet, apiPost }
