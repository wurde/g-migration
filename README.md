# g-migration

Generate a migration file.

## Getting started

Add the following to your `package.json` file to download the binary and
setup an npm script to run the task.

    ./package.json
    "devDependencies": {
      "g-migration": "^1.2.0"
    },
    "scripts": {
      "g:migration": "./node_modules/.bin/g_migration",
    },

Now run the commands:

    $ npm install
    $ mkdir ./db/migrations
    $ npm run g:migration

## Changelog

Get the project's history in [CHANGELOG.md](CHANGELOG.md).

## Maintainer

Andy Bettisworth <andy@accreu.com> https://andybettisworth.com

## License

This project is released under the [MIT License](LICENSE.txt).
