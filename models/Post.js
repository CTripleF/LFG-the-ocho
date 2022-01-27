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
            type: DataTypes.STRING,
            allowNull: true,
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
            // not sure about this interest_id below - I think we need a table that is seeded with all of the games and we can post to /xbox /cardgames etc. based on game id "where: game id: 1"
            interest_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'interest',
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

module.exports = Post;

