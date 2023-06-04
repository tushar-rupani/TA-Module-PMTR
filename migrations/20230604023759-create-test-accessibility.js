"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("test_accessibilty", {
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
        references: {
          model: "project",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      test_configuration_id: {
        allowNull: false,
        references: {
          model: "test_configuration",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      project_uri_id: {
        references: {
          model: "project_uri",
          key: "id",
        },
        type: Sequelize.BIGINT,
      },
      test_queue_id: {
        allowNull: false,
        references: {
          model: "test_queue",
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      response_code: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      lookup_time: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      appconnect_time: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
      },
      connection_time: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      redirect_time: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
      },
      pretransfer_time: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      first_byte_transfer_time: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      total_time: {
        allowNull: false,
        type: Sequelize.DECIMAL(5, 2),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      month: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      week: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      day: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      hour: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      minute: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("test_accessibility");
  },
};
