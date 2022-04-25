import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.component.html',
  styleUrls: ['./institutes.component.css']
})
export class InstitutesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location    
  ) { }

  ngOnInit(): void {
    this.getInstitute();
  }

  institutes: any[] = [];

  getInstitute(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({"User": "etraining",
    "Password": "explorandoando2020%",
    "option": "instituciones",
    "CodMun" : id });
    this.http.post('https://www.php.engenius.com.co/DatabaseIE.php',body, {'headers':headers})
    .subscribe((institutes: any) => {
      console.log(institutes.data);
      this.institutes = institutes.data;
    });    
  }
}
