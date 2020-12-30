# To Run the Project

- Clone Repo

  ```bash
  git clone https://github.com/SnehalAgrawal/about-react-dummy-graphql-apis.git
  ```

- Jump into the directory

  ```bash
  cd about-react-dummy-apis
  ```

- Install:

  ```bash
   npm install -g nodemon
  ```

- Install:

  ```bash
   npm install
  ```

- Run the app:
  ```bash
   npm start
  ```

# APIs and Payload

1. **To get complete User List**
   ```JSON
   query users {
     users {
       name
       age
       email
       address
       password
     }
   }
   ```
2. **To get Single User Detail**
   ```JSON
   query user {
     user(email: "newuser@gmail.com") {
       name
       age
       email
       address
       password
    }
   }
   ```
3. **To Create User**
   ```JSON
   mutation createUser {
     createUser(
       name: "New User"
       email: "newuser@gmail.com"
       age: 25
       address: "Demo Address"
       password: "12345"
     )
   }
   ```
4. **To Update User**

   ```JSON
   mutation updateUser {
     updateUser(
       name: "Some Name"
       email: "newuser@gmail.com"
       age: 30
       address: "Demo1 Address"
     )
   }

   ```

5. **To Delete User**
   ```JSON
   mutation deleteUser {
     deleteUser(
       email: "newuser@gmail.com"
     )
   }
   ```

## By

[AboutReact](https://aboutrect.com)
