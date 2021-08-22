"use strict";

import { staticWelcomeScreenValueTitle } from "./welcome.js";

const init = () => {
  console.log(staticWelcomeScreenValueTitle.getWelcome());
  console.log(staticWelcomeScreenValueTitle.getLogo());
};

export { init };
