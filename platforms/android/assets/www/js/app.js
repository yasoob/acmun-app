// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.information', {
      url: '/information',
      views: {
        'tab-information': {
          templateUrl: 'templates/tab-information.html',
          controller: 'InformationCtrl'
        }
      }
    })

    .state('tab.committees', {
      url: '/information/committees',
      views: {
        'tab-information': {
          templateUrl: 'templates/tab-committees.html',
          controller: 'CommitteesCtrl'
        }
      }
    })

    .state('tab.information-detail', {
      url: '/information/:friendId',
      views: {
        'tab-information': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

    .state('tab.about-secretariat', {
      url: '/about/secretariat',
      views: {
        'tab-about': {
          templateUrl: 'templates/about-secretariat.html',
          controller: 'SecretariatCtrl'
        }
      }
    })

    .state('tab.accomodation', {
      url: '/accomodation',
      views: {
        'tab-information': {
          templateUrl: 'templates/tab-accomodation.html',
        }
      }
    })

    .state('tab.expenses', {
      url: '/expenses',
      views: {
        'tab-information': {
          templateUrl: 'templates/tab-expenses.html',
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })

  // From here onwards I am going to define the committees routes
  // These routes are basically useless in my view. Python is way
  // Better than ionic and Angular. I am using these just because
  // I have a requirement. Otherwise I would have ditched these 
  // Libraries and frameworks -.-
    .state('tab.disec', {
      url: '/disec',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/disec.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.sochum', {
      url: '/sochum',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/sochum.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.specpol', {
      url: '/specpol',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/specpol.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.unsc', {
      url: '/unsc',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/unsc.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.hsc', {
      url: '/hsc',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/hsc.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.unhrc', {
      url: '/unhrc',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/unhrc.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.undp', {
      url: '/undp',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/undp.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.iaea', {
      url: '/iaea',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/iaea.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.ficc', {
      url: '/ficc',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/ficc.html',
          controller: 'CommitteeCtrl'
        }
      }
    })

    .state('tab.pna', {
      url: '/pna',
      views: {
        'tab-information': {
          templateUrl: 'templates/committees/pna.html',
          controller: 'CommitteeCtrl'
        }
      }
    });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

