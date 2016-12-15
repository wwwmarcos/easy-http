# easy-http
Simple http requests using ES5 and XMLHttpRequest


## Usage
```js

 http({
      method: 'GET',
      url: 'https://dragons-api.herokuapp.com/api/dragons'
    })
    .then(function(response) {
      console.log('get response', response)
    })
    .catch(function(err) {
      console.log('err', err)
    })

```