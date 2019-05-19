const environment = process.env;
const existingKeys = Object.keys(environment);

export default {
  install(Vue) {
    Vue.prototype.$env = (key, defaultValue) => {
      if (existingKeys.includes(key)) {
        return environment[key];
      }

      const vueAppKey = `VUE_APP_${key}`;

      if (existingKeys.includes(vueAppKey)) {
        return environment[vueAppKey];
      }

      return defaultValue;
    };
  }
};
