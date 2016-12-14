var exec = require('child_process').execFile;

exec(['gpio', 'write', '1', '1'], function(err, out, code) {
    if (err instanceof Error)
        throw err;
    process.stderr.write(err);
    process.stdout.write(out);
    process.exit(code);
});