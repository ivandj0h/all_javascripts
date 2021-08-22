import figlet from "figlet";
import chalk from "chalk";
import { staticWelcomeScreenValueTitle } from "../modules/welcome.js";

describe("welcome function", () => {
  // Test Welcome Loading
  test("testing console.log in static welcome screen", () => {
    expect(staticWelcomeScreenValueTitle.getWelcome()).toBe(
      "Selamat Datang di JS Collections CLI Tools"
    );
  });

  // Test Welcome Logo Appear
  test("testing console.log in static welcome screen", () => {
    const output = chalk.whiteBright(
      figlet.textSync("JS Collections", {
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    );

    expect(staticWelcomeScreenValueTitle.getLogo()).toEqual(output);
  });
});
