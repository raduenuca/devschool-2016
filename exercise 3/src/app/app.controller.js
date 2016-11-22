(function (module) {

    var TimeSheetCtrl = function (timeSheetService) {
        var vm = this;

        vm.timesheet = {users: []};

        vm.warningLevel = function (user) {
            /*
             - If total hours <= 4 display a red background
             - If hours > 4 and < 6 display warning background
             - If hours >= 6 display green background
             */

            if (user.hours <= 4) {
                return "danger";
            }

            if (user.hours > 4 && user.hours < 6) {
                return "warning";
            }

            return "success";
        };

        vm.addNewTask = function (name, task, hours) {

            var user = {tasks: [], hours: 0};
            var usersFound = vm.timesheet.users.filter(function (user) {
                return user.name === name;
            });

            if (usersFound.length > 0) {
                user = usersFound[0];
            }

            user.name = name;

            var taskExists = user.tasks.filter(function (existingTask) {
                return existingTask === task;
            }).length > 0;

            if(!taskExists){
                user.tasks.push(task);
            }

            user.hours += parseInt(hours);

            if (usersFound.length === 0) {
                vm.timesheet.users.push(user);
            }

            //vm.timesheet.tasks.push({user: user, task: task, hours: hours});
        };

        timeSheetService.getTimeSheet().success(function (data) {
            vm.timesheet = data;
        });
    };

    module.controller("TimeSheetCtrl", TimeSheetCtrl);

}(angular.module("timeSheetApp")));
