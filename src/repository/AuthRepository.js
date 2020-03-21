import Repository from "./Repository"

export default {
  login: payload => Repository.post(`/login`, payload),
  register: payload => Repository.post(`/register`, payload)
}
