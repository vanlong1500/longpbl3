'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Post.init({
        imagesId: DataTypes.STRING,
        title: DataTypes.STRING,
        descriptionId: DataTypes.STRING,
        address: DataTypes.STRING,
        price: DataTypes.STRING,
        acreage: DataTypes.STRING,
        cateloryCode: DataTypes.STRING,
        userId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};