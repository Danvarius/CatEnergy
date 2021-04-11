const critical = require('critical');

critical.generate({

   inline:true,

   base: '/Users/ivan/Desktop/CatEnergy/source',

   src: '_index.html',

   width: 320,

   height: 400,

   target: {
      css: 'critical.css',
      html: 'index.html',
      uncritical: 'uncritical.css'
   },

   minify: true,

   extract: true,

});