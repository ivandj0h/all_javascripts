import { getLog } from "jest-console";

const staticWelcomeScreenValueTitle = {
  getWelcome: () => {
    console.log("Selamat Datang di JS Collections CLI Tools");
  },
};

describe("welcome function", () => {
  test("testing console.log", () => {
    console.log("Hello %s!", "World");
    expect(getLog().log).toBe("Hello World!");
  });
});
