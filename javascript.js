angular.module('portalApp')
    .controller('highStreet40Ctrl', function($scope) {

        $scope.portalHelpers.showView("highStreet40Main.html", 1);

        $scope.displayRegistration = {
            value: false
        };
        $scope.displayMatches = {
            value: false
        };
        $scope.displayFinal = {
            value: true
        };
        $scope.profiles = [{
            "name": "Rose",
            "age": 23,
            "image": "https://randomuser.me/api/portraits/lego/6.jpg",
            "tag": "Tall",
        }, {
            "name": "Chang",
            "age": 22,
            "image": "https://randomuser.me/api/portraits/lego/0.jpg",
            "tag": "Funny"
        }, {
            "name": "Shinqin",
            "age": 23,
            "image": "https://randomuser.me/api/portraits/lego/1.jpg",
            "tag": "Smart"
        }, {
            "name": "Williams",
            "age": 26,
            "image": "https://randomuser.me/api/portraits/lego/2.jpg",
            "tag": "Kind"
        }, {
            "name": "Emma",
            "age": 25,
            "image": "https://randomuser.me/api/portraits/lego/3.jpg",
            "tag": "Beautiful"
        }, {
            "name": "Jennifer",
            "age": 28,
            "image": "https://randomuser.me/api/portraits/lego/4.jpg",
            "tag": "Cool"
        }];
        $scope.remove = function(array) {
            array.splice(array, 1);
            if (array.length === 0) {
                $scope.displayMatches.value = false;
                $scope.displayFinal.value = true;
            }
        };

        $scope.profs = [{
            userid: 1,
            username: "Stephany",
            userurl: "https://randomuser.me/api/portraits/lego/5.jpg",
            skipped: "No",
            age: "22",
            bio: "Lorem ipsum",
            connect: "https:///"
        }];
        $scope.prevProfiles = [{
            userid: 1,
            username: "Kira",
            userurl: "https://randomuser.me/api/portraits/lego/5.jpg",
            skipped: "No",
            wathot: "7.8"
        }, {
            userid: 2,
            username: "John",
            userurl: "https://randomuser.me/api/portraits/lego/8.jpg",
            skipped: "No",
            wathot: "5.9"
        }, {
            userid: 3,
            username: "Katey",
            userurl: "https://randomuser.me/api/portraits/lego/2.jpg",
            skipped: "No",
            wathot: "7.5"
        }];
    });