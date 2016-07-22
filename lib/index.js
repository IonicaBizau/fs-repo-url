"use strict";

const conf = require("gitconfiglocal")
    , Err = require("err")
    ;

/**
 * fsRepoUrl
 * Get the repository url from a path to a repo.
 *
 * @name fsRepoUrl
 * @function
 * @param {String} dir The path to the dir.
 * @param {String} remote The remote name.
 * @param {Function} cb The callback function.
 */
module.exports = function fsRepoUrl (dir, remote, cb) {

    if (typeof dir === "function") {
        cb = dir;
        dir = process.cwd();
    }

    if (typeof remote === "function") {
        cb = remote;
        remote = "origin";
    } else if (!remote) {
        remote = "origin";
    }

    conf(dir, (err, config) => {
        if (err) { return cb(err); }

        let rem = config.remote && config.remote[remote];
        if (rem && (rem = rem.url)) {
            return cb(null, rem);
        }

        cb(new Err("Remote '<remote>' does not exist.", {
            code: "REMOTE_DOES_NOT_EXIST"
          , remote: remote
        }));
    });
};
