const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Yoda',
    email: 'an-email-this-is@forcemail.ca',
    password: 'password123'
  },
  {
    username: 'Anakin',
    email: 'not-the-younglings@coruscant.com',
    password: 'password123'
  },
  {
    username: 'Darth_Bane',
    email: 'rule_of_2@darkside.won',
    password: 'password123'
  },
  {
    username: 'Batman',
    email: 'horrible_father@endangeringkids.com',
    password: 'password123'
  },
  {
    username: 'Deadpool',
    email: 'chimichangas@anytime.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;