"use strict";

import figlet from "figlet";
import chalk from "chalk";

const staticWelcomeScreenValueTitle = {
  getWelcome: () => {
    return `\u00A0 Please wait...`;
  },

  getLogo: () => {
    return chalk.whiteBright(
      figlet.textSync("JS Collections", {
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    );
  },
};

export { staticWelcomeScreenValueTitle };
