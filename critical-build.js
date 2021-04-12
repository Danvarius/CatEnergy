const critical = require('critical');

critical.generate({

   inline:true,

   base: './',

   src: '_form.html',

   width: 320,

   height: 400,

   target: {
      css: 'critical-three.css',
      html: 'form.html',
      uncritical: 'uncritical-three.css'
   },

   minify: true,

   extract: true,

});