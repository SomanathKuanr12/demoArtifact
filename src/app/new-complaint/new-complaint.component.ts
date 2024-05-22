import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complaint.component.html',
  styleUrl: './new-complaint.component.css'
})
export class NewComplaintComponent implements OnInit{
   kittens = [
    {"name": "fluffy", "color": "white" }, 
    {"name": "luna", "color": "black" }
]

// Save array in local storage as string
onClick()
{
  localStorage.setItem('Kittenskey',JSON.stringify(this.kittens))
}

  ngOnInit() {
    this.onClick()
  }
 
}



