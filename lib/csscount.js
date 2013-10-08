var csscount, css, program, fs, input;

css = require('css');
program = require('commander');
fs = require('fs');

csscount = function() {
  program
    .version('0.0.1')
    .usage('<input file>')
    .parse(process.argv);

  input = program.args[0];
  if(!input) {
    console.error("csscount: no input provided");
    process.exit(1);
  }
  return fs.readFile(input, 'utf8', function(err, data) {
    if (err) { throw err; }
    var ast = css.parse(data);
    console.log(ast.stylesheet.rules.length);
  });
};
module.exports = csscount;
