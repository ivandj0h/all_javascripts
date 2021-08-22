"use strict";

// import packages
import figlet from "figlet";
import chalk from "chalk";

// import helpers
import { throbber } from "./helpers.js";

const staticWelcomeScreenValueTitle = () => {
  console.log("\n");
  console.log("Please wait...");

  setTimeout(() => {
    throbber.stop();
  }, 1000 * 10);

  //   console.log("\n");
  setTimeout(() => {
    console.log(
      `===========================================================================`
    );
    console.log("\u00A0 Welcome to :");
    console.log(
      `---------------------------------------------------------------------------`
    );

    console.log(
      `===========================================================================`
    );
    staticWelcomeScreenValueLogo();
  }, 1000 * 10);
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
