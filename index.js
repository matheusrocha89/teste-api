import http from 'http';
import url from 'url';
import querystring from 'query-string';
import { each, uniqBy } from 'lodash';
import jsontoxml from 'jsontoxml';

import filterService from './filter-service';


function treatResponseType(type, result) {
  let response;
  switch(type) {
    case 'xml':
      response = jsontoxml(result);
      break;
    default:
      response = JSON.stringify(result);
  }

  return response;
}

function paginate(page, list) {
  if (!page) return list;
  --page;
  const qty = 2;
  const begin = page * qty;
  const end = (page + 1) * qty;

  return list.slice(begin, end);
}

const server = http.createServer((req, res) => {
  let listOfResults = [];

  if (req.url === '/favicon.ico') {
    res.end('');
  }
  const parsedUrl = url.parse(req.url);
  const query = querystring.parse(parsedUrl.query);

  each(query, (value, attr) => {
    if (attr !== 'type') {
      listOfResults.push(filterService.filterBy(attr, value));
    }
  });

  const clearList = uniqBy(listOfResults[0], 'id');

  const responseList = paginate(query.page, clearList);

  const response = treatResponseType(query.type, responseList);

  res.end(response);
});

server.listen(8000);
