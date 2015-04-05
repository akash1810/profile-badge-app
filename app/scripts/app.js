(function (document) {
  'use strict';

  var app = document.querySelector('#app');
  app.atIdentity = 'akash1810';
  app.profileUrl = '/profile.json';

  document.title += app.atIdentity;

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
