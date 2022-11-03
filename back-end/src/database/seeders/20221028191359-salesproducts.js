module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
      [{
        sale_id: 1,
        product_id: 6,
        quantity: 12,

      },
      {
        sale_id: 2,
        product_id: 3,
        quantity: 5,
      },
      {
        sale_id: 2,
        product_id: 9,
        quantity: 7,
      }], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};

