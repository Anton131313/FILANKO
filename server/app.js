
const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const FileStore = require('session-file-store')(session);

const showAllDataRout = require('./src/routes/showAllData.router');
const commentRout = require('./src/routes/commentRout.router');
const domainRout = require('./src/routes/domainRout.router');

const app = express();

dotenv.config();
const PORT = process.env.PORT ?? 3001;

const morgan = require('morgan');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: { expires: 24 * 60 * 60e3 },
};

app.use(session(sessionConfig));

app.use(morgan('dev'));

app.use('/showAllData', showAllDataRout);
app.use('/postNewComment', commentRout);
app.use('/allComment', commentRout);
app.use('/allDomain', domainRout);
app.use('/delDomain', domainRout)

app.listen(PORT, () => {
  console.log(`Порт ${PORT} работает`);
});
