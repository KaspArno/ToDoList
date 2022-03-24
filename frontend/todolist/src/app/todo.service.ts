import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl: string = 'http://127.0.0.1:8000/todos/'

  constructor(private http: HttpClient) { }

  getToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl)
  }

  postToDos(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo)
  }
}
