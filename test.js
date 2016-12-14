var exec = require('exec');

exec(['ls', '-lha'], function(err, out, code) {
    if (err instanceof Error)
        throw err;
    process.stderr.write(err);
    process.stdout.write(out);
    process.exit(code);
});