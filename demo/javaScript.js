import _, { every, foo } from 'lodash';

var allTrue = every([
  10 === 3,
  1 === '1',
  false
])

let someTrue = _.some([
  true,
  typeof 2 == 'string'
])

// Class.
class Dog extends Animal {
  bark() {
    console.log('Woof!')
  }
}

export default Dog;

export function greet(name) {
  let message = `Hello ${name}`;
	console.log(message);
}

greet('Foo');

const https = require('https');

/**
 * Make request
 *
 * @param String URL
 */
const makeRequest = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      res.setEncoding('utf8');
      let body = '';

      res.on('data', data => {
        body += data;
      });

      res.on('end', () => {
        resolve(JSON.parse(body));
      });

    }).on('error', reject);
  });
}

async function getUser(id) {
  let user = await makeRequest(`https://api.github.com/users/${id}`);
  return user
}

getUser(4);

// If/else.
if (condition) {
	//
} else if (condition2) {
	//
} else {
	//
}

// For loop
for(let i = 0; i < 5; i++) {
  // loop
}

const validFormat = /\d[a-z]\.*\d{4}/i;
