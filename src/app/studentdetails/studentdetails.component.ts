import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  Students:any;
  filteredStudents:any;
  searchVal : string = '';
  p : number = 1;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/students.json').subscribe((result) => {
      this.Students = result;
      this.filteredStudents = [...this.Students]
    });
  }

  search(){
    if(this.searchVal == ""){
      this.filteredStudents = [...this.Students]
    }else{
      this.filteredStudents = this.Students.filter(result => {
        console.log(result)
        return (result.Id.toString().toLowerCase().includes(this.searchVal.toLowerCase()) ||
        result.Name.toString().toLowerCase().includes(this.searchVal.toLowerCase()) ||
        result.City.toString().toLowerCase().includes(this.searchVal.toLowerCase()) ||
        result.State.toString().toLowerCase().includes(this.searchVal.toLowerCase()) ||
        result.Pincode.toString().toLowerCase().includes(this.searchVal.toLowerCase()) ||
        result.MobileNo.toString().toLowerCase().includes(this.searchVal.toLowerCase()))
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
