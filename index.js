const buttons = document.querySelectorAll("button");
const finalResult = document.querySelector("#finalResult");
const pcChoiceP = document.querySelector("#pcChoice");
const playerChoiceP = document.querySelector("#playerChoice");

// Ajout évènement sur chaque bouton
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    finalResult.textContent = playGame(btn.id);
  });
});

// Crée une fonction qui fasse un choix aléatoire

const getRandomChoice = () => {
  const choices = ["pierre", "papier", "ciseaux"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

// Le jeu

const playGame = (playerChoice) => {
  const pcChoice = getRandomChoice();

  const result = document.querySelector(".result");

  result.innerHTML = `<p>Pc Choice : ${pcChoice}</p>`;

  // pcChoiceP.textContent = `pc choice : ${pcChoice}`;
  playerChoiceP.textContent = `player choice : ${playerChoice}`;

  if (pcChoice === playerChoice) {
    return "Egalité !";
  }

  if (playerChoice === "pierre") {
    if (pcChoice === "ciseaux") {
      return "JOUEUR gagne";
    } else {
      return "PC gagne";
    }
  }

  // if (playerChoice === "papier") {
  //   if (pcChoice === "pierre") {
  //     return "JOUEUR gagne";
  //   } else {
  //     return "PC gagne";
  //   }
  // }

  if (playerChoice === "papier" && pcChoice === "ciseaux") {
    return "JOUEUR gagne";
  }

  if (playerChoice === "papier" && pcChoice === "pierre") {
    return "PC gagne";
  }

  if (playerChoice === "ciseaux") {
    if (pcChoice === "pierre") {
      return "PC gagne";
    } else {
      return "JOUEUR gagne";
    }
  }
};
