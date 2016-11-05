(function (module) {

    var ToDoCtrl = function (toDoService) {
        var vm = this;

        vm.todo = {
            user: "Radu"
        };

        vm.incompleteCount = function () {
            var count = 0;
            angular.forEach(vm.todo.items, function (item) {
                if (!item.done) {
                    count++
                }
            });
            return count;
        };

        vm.warningLevel = function () {
            return vm.incompleteCount() < 3 ? "label-success" : "label-warning";
        };

        vm.addNewItem = function (actionText) {
            vm.todo.items.push({action: actionText, done: false});
        };

        toDoService.getItems().success(function (data) {
            vm.todo.items = data;
        });
    };

    module.controller("ToDoCtrl", ToDoCtrl);

}(angular.module("toDoApp")));
