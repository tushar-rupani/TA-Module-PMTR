"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("test_queue", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT,
        autoIncrement: true,
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
        type: Sequelize.BIGINT,
      },
      project_uri_id: {
        allowNull: false,
        references: {
          model: "project_uri",
          key: "id",
        },
        type: Sequelize.BIGINT,
      },
      run_at: {
        allowNull: false,
        type: Sequelize.BIGINT,
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
      is_running: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_finished: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_zombie: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      has_result: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      finished_at: {
        type: Sequelize.BIGINT,
      },
      server_process_id: {
        type: Sequelize.BIGINT,
      },
      server: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "server",
          key: "id",
        },
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
    await queryInterface.dropTable("test_queue");
  },
};
