# Express RESTAPI

This project is implemented as a test.

## Use of the `.env` variables:

To use the .env variables please create the file (.env) at the root of your application.
```  
DATABASE_URL=connection://username:password@host:port
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