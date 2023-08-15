import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { UpdateTodosComponent } from './pages/update-todos/update-todos.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title : 'Home - Todo Manager'
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
    title : 'Add Todos'
  },
  {
    path: 'update-todos',
    component: UpdateTodosComponent,
    title : 'Update Todos'
  },
  {
    path: 'view-todos',
    component: ViewTodosComponent,
    title : 'View Todos'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
