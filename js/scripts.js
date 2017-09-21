/*=============================
  Primary Application Code
=============================*/

const Moon = require("moonjs");
require("./components/header.moon")(Moon);

const MoonRouter = require('moon-router');
Moon.use(MoonRouter);

new Moon({
  el: "#app"
});
