module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("carts", "user_session_id", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("carts", "user_session_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
