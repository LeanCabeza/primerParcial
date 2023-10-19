import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.http.get("https://api.github.com/users/LeanCabeza").subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

}
