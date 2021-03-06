const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// interest queries
// function filterByQuery(query, interestArray) {
//     let filteredResults = interestArray;

//     if(query.xbox) {
//         filteredResults = filteredResults.filter(interest => interest.xbox === query.xbox);
//     }

//     if(query.playstation) {
//         filteredResults = filteredResults.filter(interest => interest.playstation === query.playstation);
//     }

//     if(query.cross_platform) {
//         filteredResults = filteredResults.filter(interest => interest.crossPlatform === query.cross_platform);
//     }

//     if(query.mmo) {
//         filteredResults = filteredResults.filter(interest => interest.mmo === query.mmo);
//     }

//     if(query.moba) {
//         filteredResults = filteredResults.filter(interest => interest.moba === query.moba);
//     }

//     if(query.rts) {
//         filteredResults = filteredResults.filter(interest => interest.rts === query.rts);
//     }

//     if(query.sports) {
//         filteredResults = filteredResults.filter(interest => interest.sports === query.sports);
//     }

//     if(query.board_games) {
//         filteredResults = filteredResults.filter(interest => interest.boardGames === query.board_games);

//     }

//     if(query.card_games) {
//         filteredResults = filteredResults.filter(interest => interest.cardGames === query.card_games);
//     }

//     if(query.table_top_games) {
//         filteredResults = filteredResults.filter(interest => interest.tableTopGames === query.table_top_games);
//     }

//     return filteredResults;
// };

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
        discord_link: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isURL: true
            }
        },
        game_title: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     isAlphanumeric: true
            // }
        },
        game_console: {
            type: DataTypes.STRING,
            allowNull: true
        },
        game_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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

    
