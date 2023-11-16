'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Overviews', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement:true
            },
            code: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            cost: {
                type: Sequelize.STRING
            },
            dientich: {
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
        await queryInterface.dropTable('Overviews');
    }
};