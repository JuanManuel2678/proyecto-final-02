import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'Proyecto Final 2',
    description: 'api de blogging '
  },
  host: 'localhost:3000'
}

const outputFile = './swagger-output.json'
const routes = ['./src/app.js', './src/index.js']

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc)
