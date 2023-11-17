import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-input/todo-list/todo-list.component';
import { ItemDetailComponent } from './todo-input/item-detail/item-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
