import UserModel from "../models/user.model.js";

async function getUsers() {
  try {
    return await UserModel.findAll();
  } catch (err) {
    throw err;
  }
}

export default {
  getUsers,
};
