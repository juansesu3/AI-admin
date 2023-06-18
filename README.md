# My Admin app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

You can clone this repository, but you will need to do some previous configuration to be able to use it.

After cloning it you will need to install all the dependencies with the following. command

```bash
yarn install
```

## Please configure the following technologies

### NextAuth 

I am using Next auth to handle authentications in my application.


Here is the documentation: [NextAuth](https://next-auth.js.org/providers/google)


### Google

You will need a Google id `GOOGLE_ID` as string in your .env file Google secret `GOOGLE_SECRET` as string in your .env file. 
You can get your credentials in google cloud


Here is the documentationn : 
    [Google oauth2 Protcols](https://developers.google.com/identity/protocols/oauth2), 
    [Google oauth2 Protcols](https://console.developers.google.com/apis/credentials)


### MongoDB

I am using MongoDB to store the data of my api, so I invite you to log in to MongoDB and create your database this will give you a URI that you can configure in your .env file and store it in the following variable `MONGODB_URI` as a string this will give you access to your cluster.


Here is the documentation: [MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/)


### AWS S3 Bucket


I am using AWS S3 bucket to store the images in the cloud, so you will need some credentials to access your AWS bucket. After creating your bucket you can get your credentials and add them to your .env file in the following variables `S3_ACCESS_KEY` and `S3_SECRET_ACCESS_KEY` as string.

Here is the documentation: [Amazon Simple Storage Service Documentation](https://docs.aws.amazon.com/es_es/AmazonS3/latest/userguide/create-bucket-overview.html)



First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
