module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define(
    "Settings",
    {
      about: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {
          fullName: "",
          specialite: "",
          biography: "",
          imageUrl: "",
          introductions: "",
        },
      },
      brandLogo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      displaySettings: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {
          contactMe: true,
          projects: true,
          introduction: true,
        },
      },
    },
    {
      tableName: "settings",
      timestamps: true,
      hooks: {
        // Data par défaut si la table est vide
        afterSync: async (options) => {
          const count = await Settings.count();
          if (count === 0) {
            await Settings.create({
              about: {
                fullName: "Azyz Kabada",
                specialite: "Développeur Full-Stack",
                biography: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
                imageUrl:
                  "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                introductions:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              },
              brandLogo:
                "https://tier4marketing.com/wp-content/uploads/2015/10/Client-Logo-Placeholder.png",
              displaySettings: {
                sectionName: "Section Principale",
                isActivated: true,
              },
            });
          }
        },
      },
    }
  );

  return Settings;
};
