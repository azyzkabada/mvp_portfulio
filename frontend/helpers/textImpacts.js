// helper function
const textImpact = {
  limiterTexte: (texte, limite = 20) => {
    if (texte.length <= limite) {
      return texte;
    }
    return texte.substring(0, limite) + "...";
  },
};

export default textImpact;
