'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Linked_domains', [
      {
        name: 'shoku-yoku.ru',
        name_adress: 'www.shoku-yoku.ru (allias)',
        account_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'srv164042.hoster-test.ru',
        name_adress: 'www.srv164042.hoster-test.ru (allias)',
        account_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'сёкуёку.рф',
        name_adress: 'www.сёкуёку.рф (allias)',
        account_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
