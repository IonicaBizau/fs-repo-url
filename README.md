
# fs-repo-url

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/fs-repo-url.svg)](https://www.npmjs.com/package/fs-repo-url) [![Downloads](https://img.shields.io/npm/dt/fs-repo-url.svg)](https://www.npmjs.com/package/fs-repo-url) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the repository url from a path to a repo.

## :cloud: Installation

```sh
$ npm i --save fs-repo-url
```


## :clipboard: Example



```js
const fsRepoUrl = require("fs-repo-url");

fsRepoUrl((err, originRemoteUrl) => {
    console.log(err || originRemoteUrl);
    // => git+ssh://git@github.com/IonicaBizau/fs-repo-url.git
});

fsRepoUrl(".", "foo", (err, fooRemote) => {
    console.log(err || originRemoteUrl);
    // => { [Error: Remote 'foo' does not exist.] code: 'REMOTE_DOES_NOT_EXIST', remote: 'foo' }
});
```

## :memo: Documentation


### `fsRepoUrl(dir, remote, cb)`
Get the repository url from a path to a repo.

#### Params
- **String** `dir`: The path to the dir.
- **String** `remote`: The remote name.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
