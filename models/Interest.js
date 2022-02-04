// const database = require('mime-db');
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Interest extends Model {} 

// Interest.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         game_title: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             isAlphanumeric: true
//           }
//         },
//         game_console: {
//           type: DataTypes.STRING,
//           allowNull: true
//         },
//         // this will be where the users game preferences will be stored
//         game_type: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         post_id: {
//           type: DataTypes.INTEGER,
//           references: {
//             model: 'post',
//             key: 'id'
//           }
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'interest'
//     }
// );

// module.exports = Interest;