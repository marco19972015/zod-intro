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
    }).strict()
    
    type User = z.infer<typeof UserSchema>

    const user: User = { 
      username: 'Marco',
      
    }

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

  // In version 5 - We go over some "things" that we can do with the Object type

  // So instead of using parsing an individual in line 33 
  //            console.log(UserSchema.safeParse(user).success);
  // We are just going to use the schema and the first will be shape
  // shape. - tells us what everything is 
  //            ie. UserSchema.shape.age
  // This will give us the type that is being used on the variable zodString, zodNumber, zodDate...

  // Using .partial() works just like TS partials
  // .partial() - This makes everything optional
  //        - For example if we remove one of the fields from user object, we'll still get all the fields since 
  //          we are saying all fields are now optional
  //        - This would be greate when we have a milti-step form or anywhere in a form where we have a partial user that we might want to check
  //        - We can check this by hovering over the User type and see that we now have ? which is making everything optional

  // Using pick() ie .pick({username: true})
  // We can use pick to select specific fields at the end of the object 
  // Note that our user will only be able to contain the picked fields 
  //            const user: User = { 
  //              username: 'Marco', 
  //            }

  // Using omit() ie .omit({hobby: true})
  // We can omit certain keys we don't want 
  // if we look at the user type it has everything except for hobby

  // deepPartial() - Works just like a partial, but it makes sure it goes nested down.
  //                 So if we have objects nested in objects nested in more object, it wil make all of them partial

  // .extend()  ie. .extend({ name : z.string()})
  // - We can extend to the end of the object by adding something else 
  // - Now are user object would need to have an additional name field for it to be valid

  // .merge() ie. .merge(z.object({ name: z.string() }))
  // - If we have multiple schemas we can do a merge
  // - From here we could pass in another schema 
  
  // Final thing is what happens if we define a key that is not a username, we get an error
  // passthrough() 
  // - Allows us to pass any additional keys defined in the objec and we can see them be returned

  //              const user: User = { 
  //                username: 'Marco',
  //                name: 'Eddie'
  //              }

  // We can use strict() to make sure that nothing we don't want is being passed in the object
  // const UserSchema = z.object({
  //   username: z.string(),
  // }).strict()
}
