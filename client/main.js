import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todoList from '../imports/components/todoList/todoList';

angular.module('todone', [
  angularMeteor,
  todoList.name
]);

function onReady() {
  angular.bootstrap(document, ['todone']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
