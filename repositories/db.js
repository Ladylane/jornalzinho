import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://nvbwbgmz:BgZdqKep-v98-e0SdzUH6E5xtJiMOtYH@fanny.db.elephantsql.com/nvbwbgmz",
  {
    dialect: "postgress",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
