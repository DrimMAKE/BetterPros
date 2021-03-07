import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  public submitAttempt: boolean = false;

  taskName: any = '';
  taskDate: any = '';
  taskList = [];


  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {

    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      console.log(params.data);
      this.taskList = params.data;

    })

  }


  addTask() {

    if (this.taskName.length > 0 && this.taskDate != '') {

      let task = this.taskName;

      this.taskList.push(this.taskName)

      this.taskName = '';
      this.taskList.sort().reverse()
      //console.log(this.taskList)

    }

  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }


}
