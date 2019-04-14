import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request: any  = req;
        return next.handle(request).pipe(
            catchError(error => {
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 401) {
                            return throwError(error.statusText);
                        }
                        const messageError: string = error.headers.get('Application-Error');
                        if (messageError) {
                            console.error(messageError);
                            return throwError(messageError);
                        }
                        const serverError = error.error;
                        let modalStateErrors = '';
                        if (serverError && typeof serverError === 'object') {
                            for (const key in serverError) {
                                if (serverError[key]) {
                                    modalStateErrors += serverError[key] + '\n';
                                }
                            }
                        }
                        return throwError(modalStateErrors || serverError || 'Unhandled server error');
                    }
                }, )
        );
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
