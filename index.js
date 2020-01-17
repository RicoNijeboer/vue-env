const environment = process.env;
const existingKeys = Object.keys(environment);

let prefix = 'VUE_APP_';

export function env(key, defaultValue) {
    if (existingKeys.includes(key)) {
        return environment[key];
    }

    const vueAppKey = `VUE_APP_${key}`;

    if (existingKeys.includes(vueAppKey)) {
        return environment[vueAppKey];
    }

    const mixAppKey = `MIX_${key}`;

    if (existingKeys.includes(mixAppKey)) {
        return environment[mixAppKey];
    }

    return defaultValue;
}

export default {
    install(Vue) {
        Vue.prototype.$env = env;
    },
};

