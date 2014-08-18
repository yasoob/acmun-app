angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('InformationCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
  $scope.GotoLink = function (url) {
    window.open(url,'_system');
  };
})

.controller('CommitteesCtrl', function($scope, General, Specialised, Economic, Independent) {
  $scope.general = General.all();
  $scope.specialised = Specialised.all();
  $scope.economic = Economic.all();
  $scope.independent = Independent.all();
 })

.controller('AboutCtrl', function($scope, Abouts, Secretariat, Directorate) {
  $scope.secretariat = Secretariat.all();
  $scope.directorate = Directorate.all();
  $scope.abouts = Abouts.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('SecretariatCtrl', function($scope, Secretariat) {
  $scope.secretariat = Secretariat.all();
})

.controller('AccountCtrl', function($scope, Secretariat) {
  $scope.secretariat = Secretariat.all();
  $scope.GotoLink = function (url) {
    window.open(url,'_system');
  };
})

.controller('CommitteeCtrl', function($scope) {
  $scope.GotoLink = function (url) {
    window.open(url,'_system');
  };
})