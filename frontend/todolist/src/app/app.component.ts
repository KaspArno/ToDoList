import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  public items: string[] = []; // an empty array that is responsible to add a division
  public newTask: string = ''; // A two-way binding preformed witch pushes text on division

  public toDos: Todo[] | undefined;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getToDos().subscribe(
      response => this.toDos = response
    )
  }

  // When input is empty, it will not cerate a new division
  public addToList() {
    if (this.newTask == '') {} else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  // This fuinction takes to input the task, that has to be deleted
  public deleteTask(index: number) {
    this.items.splice(index, 1);
  }

  public updateTask(todo: Todo) {
    this.todoService.postToDos(todo)
  }



}
