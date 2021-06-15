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
  tableKeys = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/students.json').subscribe((result) => {
      this.Students = result;
      this.filteredStudents = [...this.Students];
      this.tableKeys = Object.keys (this.Students[0]);
    });
  }

  search(){
    this.filteredStudents = [];
    if(this.searchVal == ""){
      this.filteredStudents = [...this.Students]
    }else{
      this.tableKeys.forEach(element=> {
        let localFilter = this.Students.filter(result => {
          if (result[element]){
            return result[element].toString().toLowerCase().includes(this.searchVal.toLowerCase())
          }
        });
        if (localFilter.length>0){
          this.filteredStudents = [...this.filteredStudents, ...localFilter]
        }
      })
    }
  }
  key: string = '';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
