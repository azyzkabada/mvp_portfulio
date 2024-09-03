module.exports = (sequelize, DataTypes) => {
  const Admins = sequelize.define(
    "Admins",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "admin",
        validate: {
          isIn: [["admin", "superadmin", "editor"]],
        },
      },
    },
    {
      tableName: "admins",
      timestamps: true,
    }
  );

  return Admins;
};
