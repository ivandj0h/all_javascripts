"use strict";

import figlet from "figlet";
import chalk from "chalk";

const staticWelcomeScreenValueTitle = () => {
  console.log("\n");
  console.log(
    `===========================================================================`
  );
  console.log("\u00A0 Welcome to :");
  console.log(
    `---------------------------------------------------------------------------`
  );
  staticWelcomeScreenValueLogo();
  console.log(
    `===========================================================================`
  );
};

const staticWelcomeScreenValueLogo = () => {
  console.log(
    chalk.whiteBright(
      figlet.textSync("JS Collections", {
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
};

export { staticWelcomeScreenValueTitle };
