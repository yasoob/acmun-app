angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Committees Information', url: '#/tab/information/committees' },
    { id: 1, name: 'Outstation Information', url: '#/tab/accomodation' },
    { id: 2, name: 'Expenses & Deadlines', url: '#/tab/expenses' },
    { id: 3, name: 'Conference Venue', url: '#/tab/venue' },
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Secretariat', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var secretariat = [
    { id: 0, name: 'Ahmed Tajammul', post: 'Chair UNSC', img: 'Ahmed Tajammul.jpg' },
    { id: 1, name: 'Nausherwan Ahmed Aamir', post: 'Chair HSC', img: 'Nausherwan Aamir.jpg' },
    { id: 2, name: 'Nausherwan Abbasi', post: 'Chair DISEC', img: 'Nausherwan Abbasi.jpg' },
    { id: 3, name: 'Mustafa Amjad', post: 'Chair UNDP'},
    { id: 4, name: 'Muhammad Naveed', post: 'Chair UNHRC'},
    { id: 5, name: 'Ahmed Rabbani', post: 'Co-Chair UNHRC'},
    { id: 6, name: 'Deyar Pasha', post: 'Chair SOCHUM'},
    { id: 7, name: 'Zulfiqar Mannan', post: 'Co-Chair SOCHUM'},
    { id: 8, name: 'Bilal Shafi', post: 'Chair SPECPOL'},
    { id: 9, name: 'Erzum Naqvi', post: 'Chair IAEA'},
    { id: 10, name: 'Asad Zafar', post: 'Chair FICC'},
    { id: 11, name: 'Tabraiz Lodhi', post: 'Co-Chair FICC'},
    { id: 12, name: 'Numair Liaqat', post: 'Chair PNA'},
    { id: 13, name: 'Sahibzada Ahmad', post: 'Co-Chair PNA'},
  ];

  return {
    all: function() {
      return secretariat;
    },
    get: function(friendId) {
      // Simple index lookup
      return secretariat[friendId];
    }
  }
})

.factory('Directorate', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var directorate = [
    { id: 0, name: 'Ali Hassan', post: 'Director Registrations'},
    { id: 1, name: 'Mustafa Amjad', post: 'Director Registrations'},
    { id: 2, name: 'Hamza Latif', post: 'Director Logistics'},
    { id: 3, name: 'Haris Bhatti', post: 'Transportation Head'},
    { id: 4, name: 'Shahmir Amer', post: 'Mess in Charge'},
    { id: 5, name: 'Bakhtiyar Arshad', post: 'Director Liaison'},
    { id: 6, name: 'Zain ul Hassan', post: 'Director Liaison'},
    { id: 7, name: 'Abdul Hameed', post: 'Director Accommodations'},
    { id: 8, name: 'Azmeer Memon', post: 'Director Accommodations'},
    { id: 9, name: 'Sultan Hashmi', post: 'Director Publications'},
    { id: 10, name: 'Sayaan Nawaz', post: 'Director Publications'},
    { id: 11, name: 'Harith Aslam', post: 'Guidebook Editor'},
    { id: 12, name: 'Suhaib Joiya', post: 'Guidebook Editor'},
    { id: 13, name: 'Shahmir ul Haq', post: 'Director Photography'},
    { id: 14, name: 'Munib Nasir', post: 'Director IT'},
    { id: 15, name: 'Abdul Moeed', post: 'Director IT'},
    { id: 16, name: 'Ali Mardan', post: 'Director Security'},
    { id: 17, name: 'Hamza Ehsan', post: 'Director Security'},
  ];

  return {
    all: function() {
      return directorate;
    },
    get: function(friendId) {
      // Simple index lookup
      return directorate[friendId];
    }
  }
})

.factory('General', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var general = [
    { id: 0, name: 'Disarmament And International Security Committee', url: '#/tab/disec'},
    { id: 1, name: 'Social, Humanitarian and Cultural Committee', url: '#/tab/sochum'},
    { id: 2, name: 'Special Political And Decolonization Committee', url: '#/tab/specpol'},
  ];

  return {
    all: function() {
      return general;
    },
    get: function(friendId) {
      // Simple index lookup
      return general[friendId];
    }
  }
})

.factory('Specialised', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var specialised = [
    { id: 0, name: 'United Nations Security Council', url: '#/tab/unsc'},
    { id: 1, name: 'Historical Security Council', url: '#/tab/hsc'},
  ];

  return {
    all: function() {
      return specialised;
    },
    get: function(friendId) {
      // Simple index lookup
      return specialised[friendId];
    }
  }
})

.factory('Economic', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var economic = [
    { id: 0, name: 'United Nations Human Rights Council', url: '#/tab/unhrc'},
    { id: 1, name: 'United Nations Development Program', url: '#/tab/undp'},
  ];

  return {
    all: function() {
      return economic;
    },
    get: function(friendId) {
      // Simple index lookup
      return economic[friendId];
    }
  }
})

.factory('Independent', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var independent = [
    { id: 0, name: 'International Atomic Energy Agency', url: '#/tab/iaea'},
    { id: 1, name: 'Futuristic International Criminal Court', url: '#/tab/ficc'},
    { id: 2, name: 'Pakistan National Assembly', url: '#/tab/pna'},

  ];

  return {
    all: function() {
      return independent;
    },
    get: function(friendId) {
      // Simple index lookup
      return independent[friendId];
    }
  }
})

.factory('Abouts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var abouts = [
    { id: 0, name: 'Ahmed Tajammul', post: 'President', img: 'Ahmed Tajammul.jpg' },
    { id: 1, name: 'Nausherwan Ahmed Aamir', post: 'Secretary General', img: 'Nausherwan Ahmed Aamir.jpg' },
    { id: 2, name: 'Nausherwan Abbasi', post: 'Director General', img: 'Nausherwan Abbasi.jpg' },
    { id: 3, name: 'Zohair Raza Hassan', post: "Chargé D'affaires", img: 'Zohair Raza.jpg' },
  ];

  return {
    all: function() {
      return abouts;
    },
    get: function(friendId) {
      // Simple index lookup
      return abouts[friendId];
    }
  }
});
