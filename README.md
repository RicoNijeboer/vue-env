# Simple Vue Env
----------------
By default Vue projects read the `.env` file in the base directory of your project.
By implementing this method every key in your `.env` file will be exposed to your Vue components using the `$env` function.

## Installation
To install this package follow the following steps.

1. Run `npm install simple-vue-env`
2. Import the plugin using
   ```js
   import Vue from 'vue';
   import SimpleVueEnv from 'simple-vue-env';

   Vue.use(SimpleVueEnv, {
       prefix: 'VUE_APP_',
   });

   ...

   new Vue({
       ...
   });
   ```
3. All env variables are now exposed through the `$env` function.

## Environment Variables
If you want to create a custom environment variable you can add it to your `.env` file,
but make sure to prefix every key with `VUE_APP_` (or whatever prefix you chose).

## Getting the value
If you want to get the value of an environment variable (`VUE_APP_EMAIL` for example) and log it to the console.
You would do something like the code below
```js
export default {
    mounted() {
        console.log(this.$env('EMAIL'));
    },
};
```

### Default values
Like Laravel's `env` function it is possible to provide the `$env` function with the default value.
For example, below the default email would be `info@example.com`.
```js
export default {
    mounted() {
        console.log(this.$env('EMAIL', 'info@example.com'));
    },
};
```
