import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user_logged_In: boolean = false;
  public user: any = '';
  constructor(){

  }


  ngInit(){
    console.log('ok');
    localStorage.setItem('ok', 'Angular');
    //Dummy user.
    const userdata = {
      user_id:1,
      device_id: "dfjhhdsfytbvcreuycscyubucscb",
      user_token: "$dfsbUbsyu#894877dshydjhnd89r32y"
    };
    localStorage.setItem('user',(JSON.stringify(userdata)));


    // Checking wether user logged-In or not
    if((localStorage.getItem('user'))){
      this.user_logged_In = true; 
      // Verify wether user is valid of not using user_token
      console.log((localStorage.getItem('user')));
      this.user = localStorage.getItem('user');
      if(JSON.parse(this.user).user_token == userdata.user_token){
        this.user_logged_In = true;
      }else{
        localStorage.removeItem('user');
        this.user_logged_In = false;
      }
    }else{
      this.user_logged_In = false;
    }

  }
}
