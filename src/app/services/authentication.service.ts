import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './../common/models/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    currentUserJson = JSON.parse(localStorage.getItem('currentUser')!);

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(this.currentUserJson);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    setCurrentUserLoggedIn(obj: User) {
        this.currentUserSubject.next(obj)
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(catchError(err => this.errorHandler(err)));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null!);
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.error.message)
    }
}