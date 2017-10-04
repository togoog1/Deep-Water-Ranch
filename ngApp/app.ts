namespace dwr {

    angular.module('dwr', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: dwr.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: dwr.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('bowhunting', {
                url: '/bowhunting',
                templateUrl: '/ngApp/views/bowhunting.html',
                controller: dwr.Controllers.BowHuntingController,
                controllerAs: 'controller'
            })
            .state('camping', {
                url: '/camping',
                templateUrl: '/ngApp/views/camping.html',
                controller: dwr.Controllers.CampingController,
                controllerAs: 'controller'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/ngApp/views/contact.html',
                controller: dwr.Controllers.ContactController,
                controllerAs: 'controller'
            })
            .state('campingform', {
                url: '/campingform',
                templateUrl: '/ngApp/views/campingform.html',
                controller: dwr.Controllers.CampingFormController,
                controllerAs: 'controller'
            })
            .state('bowhuntingform', {
                url: '/bowhuntingform',
                templateUrl: '/ngApp/views/bowhuntingform.html',
                controller: dwr.Controllers.BowHuntingFormController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
