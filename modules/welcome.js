"use strict";

import figlet from "figlet";
import chalk from "chalk";

const staticWelcomeScreenValueTitle = {
  getWelcome: () => {
    return `Selamat Datang di JS Collections CLI Tools`;
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
