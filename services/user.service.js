import UserRepository from "../repositories/user.repository.js";

async function getUsers() {
  return await UserRepository.getUsers();
}

export default {
  getUsers,
};
