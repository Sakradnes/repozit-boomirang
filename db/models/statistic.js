'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  statistic.init({
    User: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    Time_in_game: {
      allowNull: false,
      type: DataTypes.TIME
    },
    Score: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    Enemy_kills: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'statistic',
  });
  return statistic;
};