
myApp.filter('gender', function () {
        return function (gender) {
            switch (gender) {
                case 1:
                    return "female";
                case 2:
                    return "male";
                case 3:
                    return "unknown";
            }
        }
    });