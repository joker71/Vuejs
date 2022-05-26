import http from '../common_axios'

class CustomerService {
  getAll(req) {
    return http.get('/customer/list', { params: req })
  }

  getById(id) {
    return http.get(`/customer/infor/${id}`)
  }

  create(data) {
    return http.post('/customer/post', data)
  }

  getListOrder(customerId, req) {
    return http.get(`/order/get/${customerId}`, { params: req })
  }
}

export default new CustomerService()
