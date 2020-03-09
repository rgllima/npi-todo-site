import Repository from "./Repository";

const resource = "/projects";

export default {
  getAll: () => Repository.get(`${resource}`)
};
