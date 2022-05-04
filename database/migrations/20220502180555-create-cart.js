module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("carts", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_session_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subtotal_in_cents: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      shipping_in_cents: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total_in_cents: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });

    await queryInterface.addIndex("carts", ['user_session_id'], {
      indicesType: 'COLUMNSTORE',
      unique: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("carts");
    await queryInterface.removeIndex('carts', ['user_session_id']);
  },
};
