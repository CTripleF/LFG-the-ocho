const {Post} = require('../models');

const postData = [
  {
    title: 'test you are looking for, this is not',
    discord_link: 'https://discord.gg/wECASPU8Ky',
    user_id: 1
  },
  {
    title: 'I HAVE THE HIGH GROUND',
    discord_link: 'https://discord.gg/wECASPU8Ky',
    user_id: 2
  },
  {
    title: 'One to hold the power and one to ',
    discord_link: 'https://discord.gg/wECASPU8Ky',
    user_id: 3
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;