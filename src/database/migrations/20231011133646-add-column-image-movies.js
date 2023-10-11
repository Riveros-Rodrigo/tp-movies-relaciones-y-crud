'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.addColumn('movies', 'image', Sequelize.STRING);

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.removeColumn('movies', 'image');

  }
};
