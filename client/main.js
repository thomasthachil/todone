import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todoList from '../imports/components/todoList/todoList';
import '../imports/startup/accounts-config.js';

angular.module('todone', [
  angularMeteor,
  todoList.name,
  'accounts.ui'
]);

function onReady() {
  angular.bootstrap(document, ['todone']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
