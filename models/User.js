const { Model, DataTypes } = require('sequelize');
// const { Interest } = require('.');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model { 
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: 'please choose a username!'

            },
            unique: {
                args: true,
                msg: 'Username already exists!'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                msg: 'please enter a valid email!'
            }
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        // discord_link: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // }
        user_bio: {
            type: DataTypes.STRING(80),
            allowNull: true,
        },
        
        // interest_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'interest',
        //         key: 'id'
        //     }
        // }
    },
    {
        hooks: {
          // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
            },
    
            async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
