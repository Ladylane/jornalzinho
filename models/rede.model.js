import Sequelize from "sequelize";
import db from "../repositories/db.js";

const RedeModel = db.define("redes", {
  redeId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  foto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default RedeModel;
