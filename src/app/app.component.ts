import { Component, OnInit } from '@angular/core';
import { z } from 'zod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export default class AppComponent implements OnInit {
  title = 'ZOD-Validation';

  ngOnInit(){

    const hobbies = ["Programmer", "Weight Lifting", "Guitar"] as const

    const UserSchema = z.object({
      username: z.string(),
      friends: z.array(z.string()).nonempty(),
    }).strict()
    
    type User = z.infer<typeof UserSchema>

    const user: User = { 
      username: 'Marco',
      friends: ["Nena", "Yoda"]
      
    }
    UserSchema.shape.friends.element
    console.log(UserSchema.parse(user));
    
  }
// ----------------------------------------------------------------------------------------------------------------------------------------
  // const hobbies = ["Programmer", "Weight Lifting", "Guitar"] as const

  // const UserSchema = z
  // .object({
  //   username: z.string(),
  //   age: z.number().default(Math.random),
  //   birthdate: z.date(),
  //   isProgrammer: z.boolean(),
  //   hobby: z.enum(hobbies)
  // })
  // .merge(z.object({ name: z.string() }))
  

  // type User = z.infer<typeof UserSchema>

  // const user: User = { 
  //   username: 'Marco', 
  //   age: 25,
  //   birthdate: new Date(),
  //   isProgrammer: true,
  // }

  // console.log(UserSchema.partial().parse(user));
// ----------------------------------------------------------------------------------------------------------------------------------------
  // In order to use ZOD we import the object z from 'zod'
  // The z object does everything we want to do with zod (no need to worry about anything else)

  // In version 6 - we go over the Array type
  // Lets say we want to have an array of freinds, we first define it in the object
  //            friends: z.array(z.string())

  // In the user we can have an array of friends 
  //            friends: ["Nena", "Yoda"]

  // If we save and log the user out we can see our return
  //            console.log(UserSchema.parse(user));

  // If we want to get the actual schema of the elements we use
  //            UserSchema.shape.friends.element
  // Hovering over element will return the type of our array

  // nonempty() - We can make sure the array is not empty
  //            friends: z.array(z.string()).nonempty(),
  // If the array is empty it will throw an error. 

  // We can also specify a min(), max(), or a hard coded length
}
