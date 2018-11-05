
import express from "express";
import path from "path";
import compression  from 'compression'
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/AppRoutes.js";

import { StaticRouter } from "react-router-dom";

import LRUCache from 'lru-cache'
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, next) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    return res.send(ssrCache.get(key))
  }
  else {
    next()
  }
}

const app = express();
app.set('PORT', process.env.PORT||2048)

app.disable('x-powered-by')
app.use(compression())
app.use(express.static(path.resolve('./dist/CSR')));

app.get('/', renderAndCache, ( req, res ) => {
  res.setHeader('x-cache', 'MISS')
  const key = getCacheKey(req)
  const context = {};
  const ReactDom = renderToString(<StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>);
    const $data = htmlTemplate(ReactDom,  `App - ${req.url}`);
    ssrCache.set(key, $data)
    res.writeHead( 200, { "Content-Type": "text/html" } );
    return res.end($data);
});

app.listen(app.get('PORT'), () => {
  console.log(`at port ${app.get('PORT')}`);
});

function htmlTemplate(reactDom, title) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <title>demo - ${title}</title>
          <meta name="theme-color" content="#282F55" />
          <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous" /> -->
          <!-- <link rel="manifest" href="/manifest.json"> -->
          <!-- <link rel="shortcut icon" href="/favicon.ico"> -->
          <link defer href="/css/landing.css" rel="stylesheet" />
          <link defer href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" />
          <link defer href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
          <link defer href="https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:800" rel="stylesheet" />
        </head>
          <body>
            <noscript>
            You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">${reactDom}</div>
            <div id="modal-container"></div>
            <script async defer="true" type="application/javascript" src="/landing.js"></script>
          </body>
        </html>
    `;
}