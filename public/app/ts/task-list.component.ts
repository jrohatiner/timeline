/// <reference path="../../../typings/tsd.d.ts" />

import {NgForm}    from 'angular2/common';
import { Task }    from './task';
import {Component, OnInit}   from 'angular2/core';
import {Router}              from 'angular2/router';
import {WipService}      from  './wip.service';
import {CheckListComponent} from './check-list.component';
import {Ongoing} from './ongoing';
@Component({
  templateUrl: 'app/task-list.component.html',
  directives: [CheckListComponent]
})
export class TaskListComponent {
	public wipList: Ongoing[];
	constructor(
    private _router: Router,
    private _service: WipService) { }

	
	ngOnInit() {
		this._service.getWipList().then(wipList => this.wipList = wipList)
	}
}