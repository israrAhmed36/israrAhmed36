import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  getValue;
  public userDetail:any=[];
  constructor(private router:ActivatedRoute,public api:ApiService,public alertController:AlertController,private navCtrl:NavController) {
    this.getValue= this.router.snapshot.paramMap.get("id");
    this.getUserDetail(this.getValue);
   }

  ngOnInit() {
   

   
  }

  getUserDetail(id){
    this.api.getUserDetail(id).subscribe(result=>{ 
      this.userDetail=result['data'];
     console.log(this.userDetail)
    })
  }

  async showalert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Thank You',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.navCtrl.navigateBack('/home');
  }

}
