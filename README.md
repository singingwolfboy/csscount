# csscount

A super-simple script that counts up the number of CSS selectors in a file.
Useful for checking against
[Internet Explorer's CSS selector limit](http://blesscss.com/).

## How to install
```bash
$ npm -g install csscount
```

## How to Use
```bash
$ csscount style.css
1337
```

csscount can also read from stdin:
```bash
$ scss style.scss | csscount -
9001
```
