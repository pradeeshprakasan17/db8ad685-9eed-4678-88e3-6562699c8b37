import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/services/user-service/user';
import { UserService } from 'src/services/user-service/user.service'; 

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  id: any;
  user: User =new User();
    constructor(private userService: UserService,
      private route: ActivatedRoute,
      private router: Router){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user=data;
    }, 
    error => console.log(error));
  }
  onSubmit(){
    this.userService.updateUser(this.id , this.user).subscribe(data =>{
    this.goToUserList();
    },
     error => console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/user']);
  }

}