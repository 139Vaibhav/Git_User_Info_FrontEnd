import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { RepoArray } from './user';
import { UserArray } from './userInfo';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://kind-pink-giraffe-boot.cyclic.app/api/v1';


  getUser(userName: string): Observable<UserArray[]> {
    const url = `${this.configUrl}/userInfo/${userName}`
    return this.http.get<UserArray[]>(url)
      .pipe(
        catchError(this.handleError('fetch users', []))
      );
  }

  getRepos(userName: string, pageNum: number): Observable<RepoArray[]> {
    const url = `${this.configUrl}/repoPageInfo/${userName}?page=${pageNum}`
    return this.http.get<RepoArray[]>(url)
      .pipe(
        catchError(this.handleError('fetch users', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation}. Reason: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
