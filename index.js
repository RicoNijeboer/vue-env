const environment = process.env;
const existingKeys = Object.keys(environment);

let prefix = 'VUE_APP_';

export function env(key, defaultValue) {
    if (existingKeys.includes(key)) {
        return environment[key];
    }

    const vueAppKey = `${prefix}${key}`;

    if (existingKeys.includes(vueAppKey)) {
        return environment[vueAppKey];
    }

    return defaultValue;
}

export default {
    install(Vue, config = { prefix: 'VUE_APP_' }) {
        Vue.prototype.$env = env;

        prefix = config.prefix;
    },
};
