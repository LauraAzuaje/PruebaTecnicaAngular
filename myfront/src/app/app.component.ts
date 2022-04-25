
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){
    this.loadMunicipies();
  }
  municipies: any[] = [];
  institutes: any[] = [];

  loadMunicipies(){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({"User": "etraining",
    "Password": "explorandoando2020%",
    "option": "municipios"});
    this.http.post('https://www.php.engenius.com.co/DatabaseIE.php',body, {'headers':headers})
    .subscribe((municipies: any) => {
      this.municipies = municipies.data;
    });
  }

  getInstitute(id: any) {
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