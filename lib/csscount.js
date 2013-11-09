var csscount, css, program, fs, input, data, parseData;

css = require('css');
program = require('commander');
fs = require('fs');

csscount = function() {
  program
    .version('0.0.2')
    .usage('( - | input-file.css )')
    .parse(process.argv);

  parseData = function(err, data) {
    if (err) { throw err; }
    var ast = css.parse(data);
    console.log(ast.stylesheet.rules.length);
  };

  input = program.args[0];
  if(input === "-") {
    // read from stdin
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    data = "";
    process.stdin.on('data', function(chunk) {
      data += chunk;
    });
    process.stdin.on('end', function() {
      parseData(null, data);
    });
  } else if(input) {
    // read from filesystem
    return fs.readFile(input, 'utf8', parseData);
  }  else {
    console.error('csscount: no input provided, use "-" to read from stdin');
    process.exit(1);
  }
};
module.exports = csscount;
