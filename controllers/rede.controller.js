import RedeService from "../services/rede.service.js";

async function getRedes(req, res, next) {
  try {
    res.send(await RedeService.getRedes());
    logger.info(`GET /redes`);
  } catch (err) {
    next(err);
  }
}

export default {
  getRedes,
};
