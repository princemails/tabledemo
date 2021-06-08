import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  Students:any;
  name : any;
  p : number = 1;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/students.json').subscribe((result) => {
      this.Students = result;
    });
  }

  search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.Students = this.Students.filter(result => {
        return result.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }
  key: string = 'name';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
