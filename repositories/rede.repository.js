import RedeModel from "../models/rede.model.js";

async function getRedes() {
  try {
    return await RedeModel.findAll();
  } catch (err) {
    throw err;
  }
}

export default {
  getRedes,
};
