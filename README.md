throbberInterceptor.js
======================

Show throbber automatically with $http/$resource on AngularJS

```js
$http.get('/path/to/awesome/api');
```

Demo
----

http://januswel.github.io/throbberInterceptor.js/demo/

$http configuration
-------------------

You can specify "$throbber" object in the configuration object for $http.

```js
$http.get('/path/to/awesome/api', {
    '$throbber': {
        parent: '#parent-element-to-show-throbber',
        throbber: '<img src="awesome-throbber.png">'
    }
});
```
