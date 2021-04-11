const critical = require('critical');

critical.generate({

   inline:true,

   base: './',

   src: '_catalog.html',

   width: 320,

   height: 400,

   target: {
      css: 'critical-two.css',
      html: 'index.html',
      uncritical: 'uncritical-two.css'
   },

   minify: true,

   extract: true,

});