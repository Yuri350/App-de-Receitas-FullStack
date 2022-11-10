module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 53.88,
        delivery_address: 'rua teste, bairro teste',
        delivery_number: '1200',
        sale_date: new Date(),
        status: 'Entregue'
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 26.98,
        delivery_address: 'rua teste 2, bairro teste 2',
        delivery_number: '1300',
        sale_date: new Date(),
        status: 'Preparando'
      }], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
