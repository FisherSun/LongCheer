define(['durandal/system', 'require', 'jsRuntime/eventAggregator', 'jsRuntime/utility'], function (system, require, evtAgtor, util) {
    requirejs.config({
        paths: {
            
        },
        shim: {}
    });

    var cfg = {
        config: function () {
            return system.defer(function (dfd) {
                require(["jsRuntime/configManager", 'jsRuntime/utility', 'jsRuntime/resourceManager'], function (cm, utility, rm) {
                    var results = JSON.parse(cm.setDefaultServersUrl({}));
                    dfd.resolve();
                });
            }).promise();
        }
    };
    return cfg;
});