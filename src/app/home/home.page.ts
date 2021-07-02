import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public userData:any;
  constructor(public api:ApiService,private router:Router) {
this.getUsers();
  }

  getUsers(){
    this.api.getUsers().subscribe(result=>{ 
      this.userData=result['data'];
      console.log(this.userData)
    })
  }

  
  userdetail(id){
    this.router.navigate(['/user-detail',{id}])

  }
}
