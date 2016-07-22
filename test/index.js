"use strict";

const tester = require("tester")
    , fsRepoUrl = require("..")
    ;

tester.describe("fs-repo-url", t => {
    t.should("Get the repository url from a path to a repo.", cb => {
        fsRepoUrl((err, remote) => {
            t.expect(remote).toBeA("string");
            cb();
        });
    });
});
