// Copyright (C) 2019-2020 NSEIT Limited, Mumbai. All rights reserved.
//
// This program and the accompanying materials are made available
// under the terms described in the LICENSE file which accompanies
// this distribution. If the LICENSE file was not attached to this
// distribution or for further clarifications, please contact
// legal@nseit.com.
import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  role: string;

  constructor(private router: Router) {
  }

  async canActivateChild() {
    this.role = sessionStorage.getItem('role');
    console.log(typeof this.role);
    if (typeof this.role === 'object') {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
