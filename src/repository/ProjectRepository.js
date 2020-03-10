import Repository from "./Repository";

const resource = "/projects";

export default {
  create: (payload) => Repository.post(`${resource}`, payload),
  findAll: () => Repository.get(`${resource}`),
  findByIdAndUpdate: (id, payload) => Repository.put(`${resource}/${id}`, payload),
  // findById: (id) => Repository.get(`${resource}/${id}`),
  delete: (id) => Repository.delete(`${resource}/${id}`),
};
