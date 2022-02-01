// const database = require('mime-db');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interest extends Model {} 

Interest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        game_console: {
          type: DataTypes.STRING,
          allowNull: true
        },
        // this will be where the users game preferences will be stored
        game_type: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'interest'
    }
);

module.exports = Interest;