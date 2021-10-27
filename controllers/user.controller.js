import UserService from "../services/user.service.js";

async function getUsers(req, res, next) {
  try {
    res.send(await UserService.getUsers());
    logger.info(`GET /user`);
  } catch (err) {
    next(err);
  }
}

export default {
  getUsers,
};
