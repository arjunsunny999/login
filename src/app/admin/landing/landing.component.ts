import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';  
import { AuthService } from 'src/app/services/auth.service';  
import { orderBy } from 'lodash';

import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

 export class LandingComponent implements OnInit {
  id: string;  
  title = 'image-gallery';
  public data:any = []
  constructor(private http: HttpClient , private router: Router, private authService: AuthService) { }

 getData(){
   const url ='https://api.ritzcarltonyachtcollection.com/cms-content/api/v1/offers?_format=json'
   this.http.get(url).subscribe((res:any=[])=>{
     this.data = res
     let i=[];
     let k=0;
     let newStr=[];
     i =res.map(key=>{
       return(key.field_voyages);
})
      for ( let j of i){
         this.data[k].field_voyages= j.replace(/###/g, ",");
         k++;
      }
     console.log( this.data[0].field_voyages)

// this.data.reverse(true)

   })
 }

ngOnInit() {
    this.id = localStorage.getItem('token');  
    //console.log(this.id); 
     this.getData()
 }

   logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['']);  
  }  

  forms() {   
    this.router.navigate(['/formtwo']);  
  } 
 }
  


  