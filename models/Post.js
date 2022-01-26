const model = require('connect-session-sequelize/lib/model');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
          },
        //   we can turn it into a link with <a href> in html
        discord_link: {
            type: DayaTypes.STRING,
            allowNull: true
        },
            post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
            },
            user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
            },
            // not sure about this game_id below - I think we need a table that is seeded with all of the games and we can post to /xbox /cardgames etc. based on game id "where: game id: 1"
            game_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'game',
                    key: 'id'
                }
            },
            },
       
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'post'
        }
      );

      model.exports = Post;
    
