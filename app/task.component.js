/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular2/core', './task'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_1;
    var TaskComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            }],
        execute: function() {
            TaskComponent = (function () {
                function TaskComponent() {
                    this.statusList = ['STARTED', 'FINISHED', 'BETWEEN', 'CARRY-FORWARD'];
                    this.status = 'STARTED';
                    this.model = new task_1.Task(1, 'STARTED', 'Task 1', new Date(), new Date(), "Shitty task!");
                    this.submitted = false;
                }
                TaskComponent.prototype.onSubmit = function () { this.submitted = true; };
                TaskComponent = __decorate([
                    core_1.Component({
                        selector: 'track-panel',
                        templateUrl: 'app/task.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskComponent);
                return TaskComponent;
            })();
            exports_1("TaskComponent", TaskComponent);
        }
    }
});
//# sourceMappingURL=task.component.js.map