'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            imagesId: {
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },     
            descriptionId: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.STRING
            },
            acreage: {
                type: Sequelize.STRING
            },
            cateloryCode: {
                type: Sequelize.STRING
            },
            userId: {
                type: Sequelize.STRING
            },
            overviewId: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Posts');
    }
};