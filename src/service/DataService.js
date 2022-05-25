import http from '../common_axios'

class BookService {
  getAll(req) {
    return http.get('/book/get', { params: req })
  }

  getById(id) {
    return http.get(`/book/get/${id}`)
  }

  create(data) {
    return http.post('/book/post', data)
  }

  update(data) {
    return http.put('/book/put', data)
  }
}

export default new BookService()
