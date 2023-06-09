import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take } from 'rxjs';
import { BookingService } from '../services/booking.service';

@Injectable({
  providedIn: 'root',
})
export class StyleGuard implements CanActivate {
  canAccess!: UrlTree | boolean;

  constructor(private s_booking: BookingService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.s_booking.selected$.pipe(take(1)).subscribe((data) => {
      this.canAccess = data
        ? true
        : (this.canAccess = this.router.createUrlTree(['/bookings']));
    });
    return this.canAccess;
  }
}
