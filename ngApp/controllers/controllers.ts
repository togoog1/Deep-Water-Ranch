namespace dwr.Controllers {

    export class HomeController {

      constructor($scope, $log){
        angular.module('dwr').controller('DropdownCtrl', function ($scope, $log) {
          $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
          ];

          $scope.status = {
            isopen: false
          };

          $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
          };

          $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
          };

          $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
        });



        angular.module('dwr').controller('DatepickerDemoCtrl', function ($scope) {
          $scope.today = function() {
            $scope.dt = new Date();
          };
          $scope.today();

          $scope.clear = function() {
            $scope.dt = null;
          };

          $scope.options = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
          };

          // Disable weekend selection
          function disabled(data) {
            var date = data.date,
              mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
          }

          $scope.toggleMin = function() {
            $scope.options.minDate = $scope.options.minDate ? null : new Date();
          };

          $scope.toggleMin();

          $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
          };

          var tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          var afterTomorrow = new Date(tomorrow);
          afterTomorrow.setDate(tomorrow.getDate() + 1);
          $scope.events = [
            {
              date: tomorrow,
              status: 'full'
            },
            {
              date: afterTomorrow,
              status: 'partially'
            }
          ];

          function getDayClass(data) {
            var date = data.date,
              mode = data.mode;
            if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                  return $scope.events[i].status;
                }
              }
            }

            return '';
          }
        });
      }

    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }


    export class BowHuntingController {
        public message = 'Hello from the about page!';
    }

    export class CampingController {
        public message = 'Hello from the about page!';
    }

    export class ContactController {
        public message = 'Hello from the about page!';
    }

    export class BowHuntingFormController {
  public message = 'Hello from the about page!';
    }


    export class CampingFormController {
  public message = 'Hello from the about page!';
    }





}
