const express = require('express');
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
  console.log('production mode');
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

// Error handler
app.use((err, req, res, next)=>{
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log('ERROR', errorObj);
  const errorStatus = errorObj.status;
  return res.status(errorStatus).send(errorObj.message);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
}); //listens on port 3000 -> http://localhost:3000/

