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
      username: z.string()
    })

    type User = z.infer<typeof UserSchema>

    const user: User = { username: 'Marco'}

    console.log(UserSchema.parse(user));
    
  }

  // In order to use ZOD we import the object z from 'zod'
  // The z object does everything we want to do with zod (no need to worry about anything else)

  // In version 2 - I will go over some basic usage by creating a User schema

  // 1. we create a const called UserSchema and define it as a z.object (equivalent of saing UserSchema: object = {}) 
  // Therefore, we can infer that we can define other things such as strings, booleans, and so on 

  // 2. we define the object with a username and set it to type zod string

  // 3. We then create a user and create an object defined as username and assign it a 'Marco' as the username

  // 4. We can console.log our Schema and we parse the user. 
    // This just says, hey does this user match the schema I've defined 

  // In this case it does, so if we check the console.log we can see the user is returned to us, this is good because 
  // it means it passed the validation

  // However, if const user = { username: 1} is a number instead of a string, we can we imediately get an error 
  // We get an Uncaught ZodError, this is good because we get errors based on our different validations if things are correct or not 


  // Another great thing about zod is the way it integrates with TS
  // Normally if we have a type we would need to define the user type
  //            type User = {
  //              username: string 
  //            } 

  // We would then define our user, as a type User
  // const user: User = { username: "Marco"}

  // The issue with this is that we are defining the userSchema twice
  //            type User = {
  //              username: string 
  //            } 
  // And then 
  //            const UserSchema = z.object({
  //              username: z.string()
  //            })

  // With zod we don't need to do that. We can instead remove 
  //            type User = {
  //              username: string 
  //            } 

  // We keep
  //            const UserSchema = z.object({
  //              username: z.string()
  //            })

  // And add 
  // type User = z.infer<typeof UserSchema>
  
  // If we hover over User we can see in line 78 we can see it is a type of username with a string
  // This means that it automatically inferred the type for us based on our schema, and as we change our schema and 
  // do different things to it, this type for our users is going to automatically be inferred 
  // the infer method being a part of zod 


  // final thing we'll cover is controlling our error that is thrown at us when validation doesn't go as planned
  // We have the option of turning this error into a boolean value using...
  //            safeParse() function/method
  // What this does is if it fails it returns us an object which has 
  //            {success: false, error: ZodError}

  // OR if it passes it returns us 
  //            {success: true, data:{}}
  // it returns us the data which is the object itself
  
  // This can be useful in a form validation, instead of doing a DB validation
    
}
