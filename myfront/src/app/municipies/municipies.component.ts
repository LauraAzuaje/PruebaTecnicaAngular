import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-municipies',
  templateUrl: './municipies.component.html',
  styleUrls: ['./municipies.component.css']
})
export class MunicipiesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    ) {
    this.loadMunicipies();
   }

  ngOnInit(): void {
    this.loadMunicipies();
  }

  municipies: any[] = [];

  loadMunicipies(): void {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({"User": "etraining",
    "Password": "explorandoando2020%",
    "option": "municipios"});
    this.http.post('https://www.php.engenius.com.co/DatabaseIE.php',body, {'headers':headers})
    .subscribe((municipies: any) => {
      this.municipies = municipies.data;
    });
  }  

}
