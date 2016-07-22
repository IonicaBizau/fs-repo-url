"use strict";

const fsRepoUrl = require("../lib");

fsRepoUrl((err, originRemoteUrl) => {
    console.log(err || originRemoteUrl);
    // => git+ssh://git@github.com/IonicaBizau/fs-repo-url.git
});

fsRepoUrl(".", "foo", (err, fooRemote) => {
    console.log(err || originRemoteUrl);
    // => { [Error: Remote 'foo' does not exist.] code: 'REMOTE_DOES_NOT_EXIST', remote: 'foo' }
});
