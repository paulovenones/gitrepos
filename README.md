# proffy

<h1 align="center">
  <img src="https://github.com/paulovenones/proffy/blob/master/banner.png" alt="Proffy"/>
</h1>

Link to access [Demo](https://proffy-webapp.vercel.app/)

## 📢 About

**Proffy** is a fullstack project built during the **2nd** edition of **Next Level Week** promoted by Rocketseat.

The objective of this project is to put into practice the best technologies available in the web development market to build an application compatible with desktop and mobile devices.

With **Proffy** the user must be able to choose between teaching and learning. See some possibilities:

* **Learn**
   * Available Proffys
   * Contact a Proffy
   * Favorite  a Proffy
   * Filter by: course, day of the week and time
* **Teach**
   * Create a profile
   * Create a class



## ⚡ Tools

* HTML

* CSS

* ReactJS
* React Native
* Expo

* TypeScript / JavaScript

* React Router v4

* NodeJS

* SQL (sqlite)

* Migrations

* Knex

* Express


  

  

## ⬇️ Clone this project

> **REQUIRED**: You will need **Yarn** (or NPM) and **NodeJS**

```bash
# Clone this repository
$ git clone https://github.com/paulovenones/proffy.git
```

### Run the Web page

```bash
# Navigate go to /web
$ cd web

# Install dependencies => only once
$ yarn install

# Run the local server
$ yarn start
```

### Run the server

```bash
# Navigate go to /server
$ cd server

# Install dependencies => only once
$ yarn install

# Create a new empty database (optional)
	# go to src/data/ and remove 'data.sqlite' then run:
$ yarn knex:migrate

# Run the local server
$ yarn start
```
