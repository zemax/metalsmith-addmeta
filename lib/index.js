var plugin = function (options) {
    options = options || {};

    return function (files, metalsmith, done) {
        var metadata = metalsmith.metadata();

        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                metadata[key] = options[key];
            }
        }

        return done();
    };
};

module.exports = plugin;
