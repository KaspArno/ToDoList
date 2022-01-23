import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl: string = 'http://127.0.0.1:8000/todos/'

  constructor(private http: HttpClient) { }

  getToDos() {
    return this.http.get<Todo>(this.todoUrl)
  }
}
