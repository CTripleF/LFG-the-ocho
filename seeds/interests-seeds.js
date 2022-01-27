const sequelize = require('../canfig/connection');
const {Interest} = require ('../models');

const interestData = [
  {

  }
]

const seedInterests = () => Interest.bulkCreate(interestData);

module.exports = seedInterests;