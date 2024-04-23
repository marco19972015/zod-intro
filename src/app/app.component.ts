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
      age: z.number().default(Math.random),
      birthdate: z.date().optional(),
      isProgrammer: z.boolean().optional(),
      hobby: z.enum(hobbies)
    })

    type User = z.infer<typeof UserSchema>

    const user: User = { 
      username: 'Marco', 
      birthdate: new Date(),
      isProgrammer: false, 
      hobby: "Programmer"
    }

    console.log(UserSchema.safeParse(user).success);
    
  }

  // In order to use ZOD we import the object z from 'zod'
  // The z object does everything we want to do with zod (no need to worry about anything else)

  // In version 4 - In this version we'll go over valiadtions

  // How we can do validation beyond just checking if something extists and if it's the right type 
  // Because thats considered simple and can be done with TS

  
  // Every single type inside of ZOD will have different types of validations that we can apply ie. optional()
  // optional() - avaliable on pretty much any type

  // Things like string have a lot of additional validations

  // z.string().min() - allows us to define the minimum length
  //              username: z.string().min(3),
  //              - Must be at least 3 characters long
  // have a username >= 3 characters long causes the validation to fail
  // z.string().max() - same concept, we just set a max on 
  // z.string().email
  // z.string().url
  // AND MANY MORE

  // For a number we have 
  // z.number().gt(0) - where gt means greater than 0 for validation to be true

  // Same thing for data and same thing for boolean


  // Some types of validations that are avaialble on pretty much everything we are discussing are 
  // optional() - just saying it doesn't need to be there
  // nullable() - essentially means that it can be the value of null
  // nullish() - allows us to use undefined AND null 


  // We can also define default values 
  // isProgrammer: z.boolean().default(true) - if we don't define a field, our validation will pass since it defaults back to the "default value" that was set
  
  // We can also pass a function to default
  // age: z.number().default(Math.random()) - will give us a random number and set it as default

  // Using the literal() function
  // z.literal(true) - the field it's being used in always needs to be the exact value of true or we get an error


  // lets say we want to make sure we have a list of values, but it doesnt matter what it is
  // In that case an enum is really important. so we can do the following 
  //            hobby: z.enum(["Programmer", "Weight Lifting", "Guitar"])
  // In this cause hobby can either be Programmer, Weight Lifting, or Guitar and nothing else
  // So if we have
  //            const user: User = { 
  //              username: 'Marco', 
  //              birthdate: new Date(),
  //              isProgrammer: false, 
  //              hobby: "Programmer"
  //            }
  // if we save this, the validation is true. If we have anything other than those three in the array we get false

  // It is recommended to use z.enum over regular enums since it has better support
  // If we do have an enum already defined we can wrap it around a z.nativeEnum

  // lets say we took away the array and placed it in a const as so 
  //              const hobbies = ["Programmer", "Weight Lifting", "Guitar"]

  // We keep this
  //            const UserSchema = z.object({
  //              username: z.string(),
  //              age: z.number().default(Math.random),
  //              birthdate: z.date().optional(),
  //              isProgrammer: z.boolean().optional(),
  //              hobby: z.enum(hobbies)
  //            }) 

  //            type User = z.infer<typeof UserSchema>

  //            const user: User = { 
  //              username: 'Marco', 
  //              birthdate: new Date(),
  //              isProgrammer: false, 
  //              hobby: "Programmer"
  //            }

  // Line 107 will have an error with hobbies 
  // The reason this happens is because the array could change, HOWEVER zod does not know that 
  // We use as const at the end of the line
  //            const hobbies = ["Programmer", "Weight Lifting", "Guitar"] as const
  // This essentially makes it a read only array 
  // If we hover over hobbies we can see that it's read only, which now means zod knows this hobbies array can't change
  // For example, we woudn't be able to push into the array since it's read only 
}
