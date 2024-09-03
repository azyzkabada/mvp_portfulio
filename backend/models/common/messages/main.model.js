module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Messages",
    {
      authorFullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isArchived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "messages",
      timestamps: true,
    }
  );

  return Message;
};
