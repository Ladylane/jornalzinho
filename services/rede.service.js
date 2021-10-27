import RedeRepository from "../repositories/rede.repository.js";

async function getRedes() {
  return await RedeRepository.getRedes();
}

export default {
  getRedes,
};
