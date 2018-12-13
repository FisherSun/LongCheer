requirejs.config({
    baseUrl: 'Scripts',
    paths: {
        'text': 'text',
        'durandal': 'durandal',
        'transitions': 'durandal/transitions',
        'plugins': 'durandal/plugins'
    }
});
define('jquery', function () { return jQuery; });
define('knockout', ko);
define(['durandal/system', 'durandal/app', 'common/user', 'common/dicService'],
    function (system, app, user, dicService) {
        system.debug(true);
        app.title = '';
        app.configurePlugins({
            router: true,
            dialog: true
        });
        app.start().then(function () {
            app.setRoot('app/shell');
            dicService.getAllDictionary();
        });
    });
