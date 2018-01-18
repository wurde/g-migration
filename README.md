# g-migration

Generate a migration file.

## Getting started

Add the following to your `package.json` file to download the binary and
setup an npm script to run the task.

```json
./package.json
"scripts": {
  "g:migration": "./node_modules/.bin/g_migration"
},
```

Now run the commands:

```bash
$ npm install g-migration --save-dev
$ mkdir ./db/migrations
$ npm run g:migration create_table_users
```

## Changelog

Get the project's history in [CHANGELOG.md](CHANGELOG.md).

## Maintainer

Andy Bettisworth <andy@accreu.com> https://andybettisworth.com

## License

This project is released under the [MIT License](LICENSE.txt).
