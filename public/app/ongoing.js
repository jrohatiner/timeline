System.register([], function(exports_1) {
    var Ongoing;
    return {
        setters:[],
        execute: function() {
            Ongoing = (function () {
                function Ongoing(task) {
                    this.task = task;
                    this.name = task.name;
                    this.checkListProgress = 25;
                    this.timeProgress = 50;
                    this.checkList = task.checkList;
                    //this.checkList = new CheckList(1,this.task.id,"first checklist",[new Item(1,"first item",true)]);
                    //this.setCheckList();
                    this.setProgress();
                }
                Ongoing.prototype.setCheckList = function () {
                    // this._service.getCheckList(1)
                    //           .subscribe(checkList => this.checkList = checkList);
                };
                Ongoing.prototype.setProgress = function () {
                    // var currTime = new Date();
                    // var startTime = new Date(this.task.startTime);
                    // var finishTime = new Date(this.task.finishTime); 
                    // 	var usedTime = Math.floor((currTime-startTime) / 1000 / 60 / 60);
                    // 	var estimated = Math.floor((finishTime-startTime) / 1000 / 60 / 60);
                    // 	this.timeProgress = usedTime/estimated;
                };
                return Ongoing;
            })();
            exports_1("Ongoing", Ongoing);
        }
    }
});
//# sourceMappingURL=ongoing.js.map