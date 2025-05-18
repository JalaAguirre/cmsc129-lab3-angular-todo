import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl); 
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`; // No conversion needed now
    console.log('DELETE Request URL:', url);
    
    return this.http.delete<Task>(url).pipe(
      catchError((error) => {
        console.error('Full error response:', error);
        if (error.status === 404) {
          console.error('Task not found or invalid endpoint');
          // You might want to remove the task from local state anyway
        }
        return throwError(() => error);
      })
    );
  }

  // Add this error handling method if not already present
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => error);
    };
  }


  addTask(task: Task): Observable<Task> {
    // Backend will generate ID
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
