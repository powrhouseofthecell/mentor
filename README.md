# Mentorship

A user-friendly platform connecting mentees with mentors for guidance and growth. Users can sign up, explore events, book one-on-one sessions, and connect with experienced mentors to achieve their personal or professional goals.

## Demo

[https://umentor.vercel.app](https://umentor.vercel.app)

_Use the credentials_

| Role   | Email              | Password     |
| ------ | ------------------ | ------------ |
| Mentor | `mentor@email.com` | `Mentor@123` |
| Mentee | `jon@email.com`    | `Jon@123`    |

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

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URI`\
`DB_PASSWORD`\
`HTTP_PORT=8000`\
`HTTPS_PORT=3443`\
`SSL_CERT_PATH`\
`JWT_SECRET`\
`TOKEN_COOKIE_EXPIRES_IN`

## Tech Stack

**Client:** NextJS, TailwindCSS

**Server:** Node, Express, MongoDB
