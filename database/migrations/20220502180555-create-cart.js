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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      index: {

      },
      subtotal_in_cents: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      total_in_cents: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });

    await queryInterface.addIndex("carts", {
      fields: "user_session_id",
      unique: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("carts");
  },
};
