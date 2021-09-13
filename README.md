# Express / Knex backend with database (and some other stuff)

> This is a guide for defining the steps to setting up a backend using the following packages:
>
> - Express.js
> - knex.js
> - cors
> - path
> - dotenv
> - pg (postgre)
> - nodemon (for dev)
>
> To achieve a platform for defining basic backend routes and querying data from a database, as well as defining a local server for development.

> This repository could also be cloned as a backend starter, provided a .env file with the proper variables is defined.

**_The following directions are an overview, refer to the files for specific syntax. The directions also feature explinations of what certain commands do and links to documentation._**

## BASIC PROJECT AND REPO SETUP

1. Create a new directory
2. Open in code editor
3. Initialize as a git repository

   a. In terminal run: git init

4. Create a new package.json file

   a. In terminal run: npm init -y (-y skips the questionnaire)

5. Install dependencies listed above

   a. In terminal run: npm i - -save < package name>

   b. For nodemon run: npm - - save-dev nodemon

6. Create a .gitignore
7. Add node_modules/ to .gitignore
8. Add .env to .gitignore
9. Create a README.md file
10. Create a src directory
11. Stage and commit local repo
12. Create a remote repository
13. Push to remote

## DATABASE AND KNEX CONNECTION

14. Create a db directory (database) inside the src directory
15. Create a database (this example uses the pg dependency for PostgreSQL databases)
16. Create a .env file at root then in .env:

    a. Create a DATABASE_URL variable set to the database url as a string

    b. Create a NODE_ENV variable set to “development”

    c. Create a LOG_LEVEL variable set to “info”

17. Create a knexfile in the root director

    a. In terminal run: npx knex init

    b. Configure knex file

        i. Open knexfile.js

        ii. Require dotenv.config()

        iii. Require path set to variable ‘path’

        iv. Deconstruct DATABASE_URL from process.env

        v. Define module exports (development envoirnment)

18. Create a connection.js file in the database directory

    a. Environment variable (from process.env)

    b. Config variable - require(knexfile)\[environment\]

    c. Knex vairbale – require(knex)(config)

    d. Export knex

19. Commit and push

## APP AND SERVER SETUP

20. Create an app.js file in src directory

    a. Require ‘path’ as variable path

    b. Require ‘dotenv’.config

    c. Require express as express

    d. Require cors as cors

    e. Create const app = express()

    f. Define app.use(cors())

    g. Define app.use(express.json())

    h. Export app

21. Create server.js file in src directory
    a. Define {PORT = 5000} = process.env

    b. Require app as app

    c. Define variable knex – require connection.js

    d. knex.migrate-chain:

         i. .latest

         ii. .then((migrations)=>{app.listen(PORT,listener)

        iii. .catch((error)=>{knex.destroy()}

    e. Define function listener(){console.log(listening on port x)}

22. Commit and push
23. Create knex migrate and seed files
    
    a. Run in terminal: npx knex migrate:make < migration_name>

    b. Run in terminal: npx knex seed:make < seed_name>
24. Configure knex migrate and seed files
25. Migrate and seed database
    a. Return knex.schema.createTable(‘tablename’, (table)=>{})
    b. Follow seed guide
26. Commit and push

## SIMPLE ROUTE SETUP

27. Create a samples directory in src
28. Create samples.controller.js, samples.router.js, samples.service.js
29. In controller

    a. Require service as service

    b. Write functions with (req,res,next)

    c. Export functions

30. In service

    a. require connection.js as knex

    b. Write functions using knex

    c. Export functions

31. In router

    a. require controller as controller

    b. require express.Router()

    c. define route handler with router.route(‘/’)

    d. chain methods on routes (.get(controller.get))

    e. export router

32. In app.js

    a. Require router as samplesRouter

    b. Define app.use(‘/’, samplesRouter)

33. Commit and push

## YOU'RE DONE!

34. Run your server!

    a. Add the following script to the scripts object in package.json: ‘src/server.js’

    b. Open terminal and run: npm start
