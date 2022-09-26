const { alias } = require('react-app-rewire-alias');

module.exports = function (config) {
    alias({
        '@img': 'public/img',
        '@files': 'public/files',
        '@components': 'src/components',
        '@containers': 'src/containers'
    })(config);

    return config;
};