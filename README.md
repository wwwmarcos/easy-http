# easy-http
Simple http requests using ES5 and XMLHttpRequest


## usage examples
```js

 http({
      method: 'GET',
      url: 'https://dragons-api.herokuapp.com/api/dragons'
    })
    .then(function(response) {
      console.log('response', response)
    })
    .catch(function(err) {
      console.log('err', err)
    })

```
```js

 http({
      method: 'POST',
      url: 'https://app.com/api/user',
      data: {
        name: 'Olar',
        email: 'email@gmail.com'
      }
    })
    .then(function(response) {
      console.log('response', response)
    })
    .catch(function(err) {
      console.log('err', err)
    })

```
```js

 http({
      method: 'PUT',
      url: 'https://app.com/api/user',
      data: {
        name: 'Olar',
        email: 'email@hotmail.com'
      }
    })
    .then(function(response) {
      console.log('response', response)
    })
    .catch(function(err) {
      console.log('err', err)
    })

```
```js

 http({
      method: 'DELETE',
      url: 'https://app.com/api/user',
      data: {
        id: '09e81b2d-3e9e-4427-b579-c6b27f13a5f0'
      }
    })
    .then(function(response) {
      console.log('post response', response)
    })
    .catch(function(err) {
      console.log('err', err)
    })

```

### Add headers

```js

 http({
      method: 'POST',
      url: 'https://app.com/api/user',
      data: {
        name: 'Olar',
        email: 'email@gmail.com'
      },
      headers: {
       'Content-Type': 'application/json;charset=UTF-8'
      }
    })
    .then(function(response) {
      console.log('post response', response)
    })
    .catch(function(err) {
      console.log('err', err)
    })

```
