

# ADMIN UI PROJECT

An interface for Admin users to see, edit and delete users. The users will be provided via an API.

## Features

- Edit/Delete Button
- Pagination
- Search By Name Email & Role
- Export file

## Endpoints Routes Reference

https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json

# Install dependencies

npm install

# Install client dependencies

cd client
npm install
cd ..

# Run client and server (Visit http://localhost:3000)

npm run dev

# Run server only (:5000)

npm run server

# Run client only (:3000)

npm run client

#### Filter

```http
  GET http://localhost:5000/users?id=1
  GET http://localhost:5000/users?name=Mikhail Bill
  GET http://localhost:5000/users?email=ozgur@mailinator.com
  GET http://localhost:5000/users?role=admin
  GET http://localhost:5000/users?role=member

```

#### Database

```http
  GET http://localhost:5000/db
```
