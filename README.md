# vue-responsive-vh

This Plugin solves the URL Bar Resizing issue on mobile devices. [Read here](https://developers.google.com/web/updates/2016/12/url-bar-resizing).


## Installation

``` bash
npm install vue-responsive-vh
```

## Registration

### Vue.js

First go to your ``main.js``.

``` javascript
// ~/src/main.js
import Vue from 'vue'
import VueResponsiveVh from 'vue-responsive-vh'

Vue.use(VueResponsiveVh)
```

Registration complete ✨.

### Nuxt.js

For Nuxt.js we will create a simple Plugin.
First create a file named ``vue-responsive-vh.js`` in your ``~/plugins`` folder.

``` javascript
// ~/plugins/vue-responsive-vh.js
import Vue from 'vue'
import VueResponsiveVh from 'vue-responsive-vh'

Vue.use(VueResponsiveVh)
```

Then add the Plugin into the `plugins: []` Array in your Nuxt.js configuration file ``nuxt.config.js``

``` javascript
// ~/nuxt.config.js 
export default {

  plugins: [
    '~/plugins/vue-responsive-vh.js'
  ],

}
```

Registration complete ✨.

## Usage

You can choose between two Directives:

| Directive          | Description                                   |
| :----------------- | :-------------------------------------------- |
| ``v-min-h-screen`` | Min height of the element is screen height    |
| ``v-h-screen``     | Height of the element ist exact screen height |

Add the Directive you need to any element you choose to give it a responsive ``vh``.

``` html
// YourComponent.vue
<template>
  <div v-min-h-screen>
    ...
  </div>
</template>
```

``` html
// YourComponent.vue
<template>
  <div v-h-screen>
    ...
  </div>
</template>
```