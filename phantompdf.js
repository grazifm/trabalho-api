//arquivo js, com função parar dar screenshot da página //
var page = require('webpage').create();
page.open('https://trabalho-api-grazifm.c9users.io/index.html', function() {
  page.render('musicalizando2.pdf');
  phantom.exit();
});

