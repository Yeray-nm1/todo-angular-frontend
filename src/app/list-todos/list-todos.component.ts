import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  todos: Todo[] | undefined
  message: string | undefined;
  /*
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }*/
  /*
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }*/
  
  /*
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }*/
  /*
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }*/

  constructor(private todoService:TodoDataService, private router: Router){

  }

  ngOnInit(){
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('yerayd').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('yerayd',id).subscribe(
      response => {
        console.log(response);
        this.message= `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: any){
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
