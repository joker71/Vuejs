import http from '../common_axios'

class OrderService {
  getAll(req) {
    return http.get('/order/get', { params: req })
  }
}

export default new OrderService()
