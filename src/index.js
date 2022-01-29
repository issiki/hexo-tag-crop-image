/* global hexo */
const cut = require("./crop");

hexo.extend.helper.register("crop", cut);