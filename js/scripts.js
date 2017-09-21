/*=============================
  Primary Application Code
=============================*/

global.Moon = require("moonjs");
require("./components/header/header.moon")(Moon);
require("./components/list/list.moon")(Moon);
require("./components/row/row.moon")(Moon);

const MoonRouter = require('moon-router');
Moon.use(MoonRouter);

const router = new MoonRouter({
  default: "/",
  map: {
    "/": "list"
  }
});


new Moon({
  el: "#app",
  router: router
});
