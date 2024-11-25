# Mentorship

A user-friendly platform connecting mentees with mentors for guidance and growth. Users can sign up, explore events, book one-on-one sessions, and connect with experienced mentors to achieve their personal or professional goals.

## Demo

[https://umentor.vercel.app](https://umentor.vercel.app)

## Run Locally

Clone the project

```bash
  git clone https://github.com/powrhouseofthecell/mentor
```

**Start the backend**

```bash
  cd mentor-be
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  npm run start
```

Note: Check for self-signed SSL certificate

**Start the frontend**

```bash
  cd mentor-fe
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  npm run start
```

## Tech Stack

**Client:** NextJS, TailwindCSS

**Server:** Node, Express, MongoDB

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URI`\
`DB_PASSWORD`\
`HTTP_PORT=8000`\
`HTTPS_PORT=3443`\
`SSL_CERT_PATH`\
`JWT_SECRET`\
`TOKEN_COOKIE_EXPIRES_IN`
