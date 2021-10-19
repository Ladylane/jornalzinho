import RedeRepository from "../repositories/rede.repository.js";

async function getRedes() {
  return RedeRepository.getRedes();
}

export default {
  getRedes,
};
