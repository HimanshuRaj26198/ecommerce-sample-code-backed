import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  User = this.injector.get(UserService);
  intercept(req: any, next: any) {
    let tokanizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.User.getToken(),
      },
    });
    return next.handle(tokanizedReq);
  }
}
