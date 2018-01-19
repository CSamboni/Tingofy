// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB29LGAhBOaYPU0DZL0ER1s28_lcVvQQGY',
    authDomain: 'talkiefy.firebaseapp.com',
    databaseURL: 'https://talkiefy.firebaseio.com',
    projectId: 'talkiefy',
    storageBucket: 'talkiefy.appspot.com',
    messagingSenderId: '989764695037'
  }
};
