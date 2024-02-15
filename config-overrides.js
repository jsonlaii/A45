const webpack = require('customize-cra');

module.exports = function override(config, env) {
    // Fallback for Node.js modules
    config.resolve.fallback = {
        zlib: require.resolve('browserify-zlib'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer'),
        querystring: require.resolve('querystring-es3'),
        url: require.resolve('url'),
        path: require.resolve('path-browserify'),
        util: require.resolve('util'),
        assert: require.resolve("assert"),
        fs: false, // fs is not supported on the client-side
        net: false, // net is not supported on the client-side
        tls: false, // tls is not supported on the client-side
        child_process: false, // child_process is not supported on the client-side
        async_hooks: false, // async_hooks is not supported on the client-side
    };



    return config;
};
