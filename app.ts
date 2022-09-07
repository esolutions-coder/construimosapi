import express from "express"
import path from "path";
import cookieParser from "cookie-parser"
import logger from "morgan"
import connectDatabase from "./database";

import indexRouter from "./routes/index";
import construimosApi from "./routes/construimosApi";

var app = express();

connectDatabase();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/construimosApi', construimosApi);

export default app;
