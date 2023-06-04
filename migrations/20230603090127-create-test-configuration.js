"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("test_configuration", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      uuid: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "project",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      account_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "account",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDELETE: "CASCADE",
      },
      test_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "test_type",
          key: "id",
        },
      },
      frequency: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 3600,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      updated_at: {
        type: Sequelize.BIGINT,
      },
      deleted_at: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      is_active: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("test_configuration");
  },
};
