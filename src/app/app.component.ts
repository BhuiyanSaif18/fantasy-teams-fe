import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fantasy-teams';
  /**
   *
   */
  constructor(private storage : LocalStorageService,
    private router : Router
  ) {
  }
  logout(){
    this.storage.clear("token");
    this.router.navigate(['/login']);
  }
}
