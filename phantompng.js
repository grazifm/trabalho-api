//arquivo js, com função parar dar screenshot (png) da página //
var page = require('webpage').create();
page.open('https://trabalho-api-grazifm.c9users.io/index.html', function() {
  page.render('musicalizando2.png');
  phantom.exit();
});
