var dwr;
(function (dwr) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, $log) {
                angular.module('dwr').controller('DropdownCtrl', function ($scope, $log) {
                    $scope.items = [
                        'The first choice!',
                        'And another choice for you.',
                        'but wait! A third!'
                    ];
                    $scope.status = {
                        isopen: false
                    };
                    $scope.toggled = function (open) {
                        $log.log('Dropdown is now: ', open);
                    };
                    $scope.toggleDropdown = function ($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        $scope.status.isopen = !$scope.status.isopen;
                    };
                    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
                });
                angular.module('dwr').controller('DatepickerDemoCtrl', function ($scope) {
                    $scope.today = function () {
                        $scope.dt = new Date();
                    };
                    $scope.today();
                    $scope.clear = function () {
                        $scope.dt = null;
                    };
                    $scope.options = {
                        customClass: getDayClass,
                        minDate: new Date(),
                        showWeeks: true
                    };
                    function disabled(data) {
                        var date = data.date, mode = data.mode;
                        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                    }
                    $scope.toggleMin = function () {
                        $scope.options.minDate = $scope.options.minDate ? null : new Date();
                    };
                    $scope.toggleMin();
                    $scope.setDate = function (year, month, day) {
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
                        var date = data.date, mode = data.mode;
                        if (mode === 'day') {
                            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
                            for (var i = 0; i < $scope.events.length; i++) {
                                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);
                                if (dayToCheck === currentDay) {
                                    return $scope.events[i].status;
                                }
                            }
                        }
                        return '';
                    }
                });
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var BowHuntingController = (function () {
            function BowHuntingController() {
                this.message = 'Hello from the about page!';
            }
            return BowHuntingController;
        }());
        Controllers.BowHuntingController = BowHuntingController;
        var CampingController = (function () {
            function CampingController() {
                this.message = 'Hello from the about page!';
            }
            return CampingController;
        }());
        Controllers.CampingController = CampingController;
        var ContactController = (function () {
            function ContactController() {
                this.message = 'Hello from the about page!';
            }
            return ContactController;
        }());
        Controllers.ContactController = ContactController;
        var BowHuntingFormController = (function () {
            function BowHuntingFormController() {
                this.message = 'Hello from the about page!';
            }
            return BowHuntingFormController;
        }());
        Controllers.BowHuntingFormController = BowHuntingFormController;
        var CampingFormController = (function () {
            function CampingFormController() {
                this.message = 'Hello from the about page!';
            }
            return CampingFormController;
        }());
        Controllers.CampingFormController = CampingFormController;
    })(Controllers = dwr.Controllers || (dwr.Controllers = {}));
})(dwr || (dwr = {}));
