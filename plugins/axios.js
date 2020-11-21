import axios from 'axios'
import Vue from 'vue'

const service = axios.create({
  timeout: 5000,
  baseURL: `${process.env.baseUrl}/v1/api`
})
Vue.prototype.$http = service
