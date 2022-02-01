const {Post} = require('../models');

const postData = [
  {
    title: 'test you are looking for, this is not',
    discord_link: 'https://discord.gg/wECASPU8Ky',
    user_id: 1,
    game_title:"WoW",
    game_console: "PC",
    game_type:"MMO"
  },
  {
    title: 'I HAVE THE HIGH GROUND',
    discord_link: 'https://discord.gg/wECASPU8Ky',
    user_id: 2,
    game_title:"Call of Duty",
    game_console: "XBOX",
    game_type:"FPS"
  },
  {
    title: 'One to hold the power and one to seek it',
    discord_link: 'https://discord.gg/wECASPU8Ky',
    user_id: 3,
    game_title:"Call of Duty",
    game_console: "PC",
    game_type:"FPS"
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;