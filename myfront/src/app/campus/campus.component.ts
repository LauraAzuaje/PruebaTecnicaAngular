import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location  
  ) { }

  ngOnInit(): void {
    this.getCampus();
  }

  campus: any[] = [];
  id: number = 0;


  getCampus(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({"User": "etraining",
    "Password": "explorandoando2020%",
    "option": "sedes",
    "CodInst" : this.id });
    this.http.post('https://www.php.engenius.com.co/DatabaseIE.php',body, {'headers':headers})
    .subscribe((campus: any) => {
      console.log(campus.data);
      this.campus = campus.data;
    });
  }

}
