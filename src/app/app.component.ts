import { Component, OnInit } from '@angular/core';
import { z } from 'zod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ZOD-Validation';

  userInput = z.string().min(5).max(10);

  ngOnInit(){
    console.log(this.userInput.parse('HellasdasdsaoWor'));
    
  }








  // In order to use ZOD we import the object z from 'zod'
  // The z object does everything we want to do with zod (no need to worry about anything else)

  // 
}
