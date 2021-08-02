# Express RESTAPI

This project is implemented as a test.

## Use of the `.env` variables:

To use the .env variables please create the file (.env) at the root of your application.
```  
DATABASE_URL=connection://username:password@host:port/database
```

Localhost:
```  
DATABASE_URL=postgres://postgres:a@localhost:5432/test
```

Production:
```  
DATABASE_URL=postgres://534dc08d61a54a0e4c5f298@ec2-3-321-146-52.compute-1.amazonaws.com:5432/d4akfur43
```

You can edit values according to your own database personal preference. I am using Postgres in this case.

## Endpoints:

#### 1:
#### Method: `GET`
#### Retrieve all posts:
`https://express-rest-00.herokuapp.com/api/posts`

#### Output:
```
{
    "response": [
        {
            "id": 1,
            "text": "Hello World",
            "slug": "hello-world",
            "rating": 4,
            "createdAt": "2021-08-01T21:27:51.958Z",
            "updatedAt": "2021-08-01T21:27:51.960Z"
        },
        {
            "id": 2,
            "text": "Hello World 4",
            "slug": "hello-world-4",
            "rating": 4,
            "createdAt": "2021-08-02T03:05:36.864Z",
            "updatedAt": "2021-08-02T03:05:36.866Z"
        }
    ]
}
```
#### 2:
#### Method: `GET`
#### Retrieve single post:
`https://express-rest-00.herokuapp.com/api/post/:id`

`https://express-rest-00.herokuapp.com/api/post/1`

#### Output:
```
{
    "response": [
        [
            {
                "id": 1,
                "text": "Hello World",
                "slug": "hello-world",
                "rating": 4,
                "createdAt": "2021-08-01T17:30:02.555Z",
                "updatedAt": "2021-08-01T17:30:02.556Z"
            }
        ]
    ]
}
```
#### 3:
#### Method: `POST`
#### Add new post:
`https://express-rest-00.herokuapp.com/api/post`

### Body:

```
{  
  text: 'This is post title',  
  rating: 3  
}
```

#### Output:
```
{
    "response": {
        "saved": true,
        "post": {
            "createdAt": "2021-08-02T13:57:35.837Z",
            "id": 14,
            "text": "This is post title",
            "slug": "this-is-post-title",
            "rating": 3,
            "updatedAt": "2021-08-02T13:57:35.839Z"
        }
    }
}
```

#### 4:
#### Method: `PUT`
#### Update the post:
`https://express-rest-00.herokuapp.com/api/post/:id`

`https://express-rest-00.herokuapp.com/api/post/1`

### Body:

```
{  
  text: 'This is Awesome',  
  rating: 2  
}
```

#### Output:
```
{
    "response": {
        "updated": true,
        "affected": [
            1,
            [
                {
                    "id": 1,
                    "text": "This is Awesome",
                    "slug": "this-is-awesome",
                    "rating": 2,
                    "createdAt": "2021-08-01T17:30:02.555Z",
                    "updatedAt": "2021-08-02T14:01:49.690Z"
                }
            ]
        ]
    }
}
```

#### 5:
#### Method: `DELETE`
#### Remove the post:
`https://express-rest-00.herokuapp.com/api/post/:id`

`https://express-rest-00.herokuapp.com/api/post/1`

#### Output:
```
{
    "response": {
        "removed": true
    }
}
```

