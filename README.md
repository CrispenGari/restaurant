### restaurant

🥐🥙🥗 this is a simple restaurant `web` and `mobile` application build with `Java` as backend with `GraphQL`, `React` for the web and `React Native` for mobile.

<p align="center">
    <img width="50%" src="/logo.png"/>
</p>

### api

Java backend with `springboot`, `graphql` and `mysql`

### web

A `web` application is a react app with `redux` as state management and `mui` for modal components and `badges`.

### mobile

This is a mobile version of this app, built using `react-native`, `redux` and graphql.

### This App

This application is running locally. So to test this application on your local computer you need the following softwares.

1. NodeJs
2. Visual Studio Code
3. MySQL database server
4. Java
5. InteliJ
6. Ngrok Server

### Testing this application Locally.

Clone this repository by running the command:

```shell
git clone https://github.com/CrispenGari/restaurant.git
```

Then:

```shell
cd restaurant
```

Navigate to the `api` folder and open that project in `InteliJ`. Make sure that you have java installed. Open the `application.yml` file and change the
`username` and `password` properties of your database to your own for example:

```yml
spring:
  jpa:
    show-sql: true
    hibernate:
      ddl-auto: update
      properties:
        hibernate:
          dialect: org.hibernate.dialect.MySQL8Dialect
          format_sql: true
  datasource:
    url: jdbc:mysql://localhost:3306/restaurant
    username: root
    password: root
    driver-class-name: com.mysql.cj.jdbc.Driver
```

After that you need to create a new database called `restaurant` from your `MySQL` command line as follows:

```sql
CREATE DATABASE IF NOT EXISTS restaurant;
```

Wait for all the packages to install and run the java application.

### Testing web

Navigate to `web` by running the following command:

```shell
cd web
```

> Make sure that the `api` is running and run the following command to install packages:

```shell
yarn
```

And start the development server by running the following command:

```shell
yarn start
```

Then the development server will start on `http://localhost:3001/`

### Testing the mobile.

To test this application on a mobile application you need to get the `url` for the graphql api that is served by java. Note that this url is served on local host so you need to forward the request using `Ngrok` server. So open the `ngrok` terminal and run the following command:

```shell
ngrok http 3001
```

You will see the output that looks like

```shell
ngrok by @inconshreveable                                                                               (Ctrl+C to quit)                                                                                                                        Session Status                online                                                                                    Account                       Tinashe Crispen Crispen (Plan: Free)                                                      Update                        update available (version 2.3.40, Ctrl-U to update)                                       Version                       2.3.35                                                                                    Region                        United States (us)                                                                        Web Interface                 http://127.0.0.1:4040                                                                     Forwarding                    http://04e3-197-98-127-119.ngrok.io -> http://localhost:3001                              Forwarding                    https://04e3-197-98-127-119.ngrok.io -> http://localhost:3001                                                                                                                                                     Connections                   ttl     opn     rt1     rt5     p50     p90                                                                             35      0       0.00    0.00    65.40   121.20
```

Then navigate to the mobile application by running the following command:

```shell
cd mobile
```

Open the `src/constants/index.ts` file and edit the `__graphQLURI__` by putting the `url` that is being forwarded by `ngrok` server. For example:

```ts
export const __graphQLURI__: string =
  "https://04e3-197-98-127-119.ngrok.io/graphql";
```

Then you need to install the packages by running the command:

```shell
yarn
```

To start the `expo` mobile application after the package has been installed you need to run the following command:

```shell
yarn start
```

> Scan the `QR` code on your `Expo Go` mobile app on your phone to see the output.

### Programming Languages

This application was written in:

```shell
- java
- typescript
- css
- html
- javascript
```

### License

```
MIT License

Copyright (c) 2022 crispengari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
