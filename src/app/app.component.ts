import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title='localstorage'
  data1:any;
  data2:any
  ngOnInit(): void {
    sessionStorage.setItem('name',JSON.stringify('som'))
    sessionStorage.setItem('age',JSON.stringify('[12,23]'))
  }
  onClick(){
    this.data1=sessionStorage.getItem('name');
    console.log(this.data1);
    
    this.data2=JSON.stringify(this.data1)
    console.log(this.data2);

    const data=JSON.parse('data1')
    console.log("parse form of d1 "+data );
    const data3=JSON.parse('data2');
    console.log(data3);
    
    
    
  }
 
}
