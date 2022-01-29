/* global hexo */
const cut = require("./crop");

hexo.extend.tag.register("crop", cut);