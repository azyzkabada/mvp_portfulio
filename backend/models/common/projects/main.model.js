// models/Project.js

module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define(
    "Projects",
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      mainImage: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://cdn-icons-png.flaticon.com/512/662/662608.png",
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      display: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      isArchived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "projects",
      timestamps: true,
    }
  );

  return Projects;
};
