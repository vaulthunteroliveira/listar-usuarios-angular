import { UserService } from "./../service/user.service";
import { Component } from "@angular/core";
import { UserDTO } from 'src/models/user.dto';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  

  items: UserDTO[];

  first_name: string;

  user: UserDTO;


  constructor(public service: UserService) {}

  ngOnInit() {
    this.service.findAll().subscribe(response => {
      this.items = response;
    }, error => {
      console.log(error);
    });
  }

  showInformations(user: UserDTO){
    this.user = user;
  }
}
