import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoItem } from './toDoItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-component',
  imports: [CommonModule],
  templateUrl: './to-do-component.component.html',
  styleUrl: './to-do-component.component.scss'
})
export class ToDoComponentComponent implements OnInit{
  todoList: TodoItem[] = [];
    newTask: string = '';
    @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement> = null!;

    ngOnInit(): void {
      const storedTodoList = localStorage.getItem('todoList');
      if (storedTodoList) {
          this.todoList = JSON.parse(storedTodoList);
      }
  }

  addTask(text: string): void {
      if (text.trim() !== '') {
          const newTodoItem: TodoItem = {
              id: this.todoList.length + 1,
              task: text.trim(),
              completed: false
          };
          this.todoList.push(newTodoItem);
          this.todoInputRef.nativeElement.value = '';
          this.saveTodoList();
      }
  }

  deleteTask(id: number): void {
      this.todoList = this.todoList.filter(item => item.id !== id);
      this.saveTodoList();
  }

  toggleCompleted(id: number): void {
      const todoItem = this.todoList.find(item => item.id === id);
      if (todoItem) {
          todoItem.completed = !todoItem.completed;
          this.saveTodoList();
      }
  }

  saveTodoList(): void {
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
