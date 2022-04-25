import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location  
  ) { }

  ngOnInit(): void {
    this.getGroups();
  }
  groups: any[] = [];
  id: number = 0;


  getGroups(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({"User": "etraining",
    "Password": "explorandoando2020%",
    "option": "grupos",
    "CodSede" : this.id });
    this.http.post('https://www.php.engenius.com.co/DatabaseIE.php',body, {'headers':headers})
    .subscribe((groups: any) => {
      console.log(groups.data);
      this.groups = groups.data;
    });
  }

}
