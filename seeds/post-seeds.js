const {Post} = require('../models');

const postData = [
  {
    title: 'this is not the test you are looking for',
    discord_link: 'https://discord.gg/wECASPU8Ky',
    user_id: 1
  }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;