import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user-service/user';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  user: User[] = [];
  username: any
  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
this.getUser();

 }
 
 private getUser(){
   this.userService.getUserList().subscribe(data => {
     this.user=data;
   }); 
 }
 Search(){
   if(this.username==""){
     this.ngOnInit();
 }
 else{
   this.user=this.user.filter(data =>{
     return data.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
   });
  }
}

 updateUser(id: any){
   this.router.navigate(['update-user', id]);
 }
 deleteUser(id: any){
  this.userService.deleteUser(id).subscribe( data => {
    console.log(data);
    this.getUser();
 })
  }
}