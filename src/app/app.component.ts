import { Component, OnInit } from '@angular/core';
import { z } from 'zod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ZOD-Validation';

  ngOnInit(){

    const UserSchema = z.object({
      username: z.string(),
      age: z.number(),
      birthdate: z.date(),
      isProgrammer: z.boolean()
    })

    type User = z.infer<typeof UserSchema>

    const user: User = { username: 'Marco'}

    console.log(UserSchema.safeParse(user).success);
    
  }

  // In order to use ZOD we import the object z from 'zod'
  // The z object does everything we want to do with zod (no need to worry about anything else)

  // In version 3 - In this version we'll go over the differnt basic types we can use (such as primitives)
  // We can use the following 
  // z.number()
  // z.bigint() - if this is going to be a big integer 
  // z.date() - we know this will be a date
  // z.boolean() - sets the type to a boolean

  // Currently with the data below if we just log out the success, we'll get false. Because we haven't defined an age, birthday, and isProgrammer 
  //            const UserSchema = z.object({
  //              username: z.string(),
  //              age: z.number(),
  //              birthdate: z.date(),
  //              isProgrammer: z.boolean()
  //            })

  //            type User = z.infer<typeof UserSchema>

  //            const user: User = { username: 'Marco'}

  //            console.log(UserSchema.safeParse(user).success);

  // Inside of ZOD every single validation is required by default
  
  
  // We have the ability to make the validation optional by adding 
  //            .optional() 
  // onto the end of a validation
  // If we added to the fields we can see that success is true
  //            const UserSchema = z.object({
  //              username: z.string().optional(),
  //              age: z.number().optional(),
  //              birthdate: z.date().optional(),
  //              isProgrammer: z.boolean().optional()
  //            })

  // Some other primitive types are undefined, any, or never
  // z.unefined() - states that value should always be undefined
  // z.null() - make sure something is null
  // z.void() - accepts undefined (essentially saying there is nothing)... so return type of a function may be void
  // z.any() - if we want to accept anything 
  // z.unknown() - also accepts any type of input
  // z.never() - if want a key to never be defined (essentially saying it can never have this testkey at all and if it does it will fail)

}
