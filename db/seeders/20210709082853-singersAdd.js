'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Entries', [
      { singer: "Илона Гольман",
       songTitle: "Nat King Cole - LOVE",
       createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),
       updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
      { singer: "Гоша Бабаян",
        songTitle: "Frank Sinatra - My Way",
        createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
      { singer: "Игорь Никифоров",
        songTitle: "Слот - Платно",
        createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')
       },
      { singer: "Даниил Капустин",
        songTitle: "Heart Of A Coward - Miscreation",
        createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
      { singer: "Антон Алексеевич",
        songTitle: "Кровосток - Биография",
        createdAt:new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt:new Date().toISOString().slice(0, 19).replace('T', ' ')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Entries',null, {restartIdentity:true, truncate:true});
  }
};
