//define(['durandal/system', 'plugins/router', 'common/user', 'jsRuntime/configManager'],
define(['plugins/router'],
    function (router) {
        return {
            router: router,
            activate: function () {
                router.reset();
                router.map([
                    { route: '', title: '基础设置', moduleId: 'app/login', nav: true },
                    { route: '', title: '产品资料维护', moduleId: 'app/login', nav: true },
                    { route: 'app/basesetting/FactoryList', title: '生产管控', moduleId: 'app/basesetting/FactoryList', nav: true },
                    { route: 'demo', title: '物料管理', moduleId: 'app/style1', nav: true },
                    { route: '', title: 'SMT管理', moduleId: 'app/login', nav: true },
                    { route: 'app/login', title: '设备管理', moduleId: 'app/login', nav: true },
                    { route: 'demo', title: '报表查询', moduleId: 'app/demo', nav: true },
                    { route: '', title: '看板管理', moduleId: 'app/login', nav: true },
                    { route: 'app/login', title: '报表平台', moduleId: 'app/login', nav: true },
                    { route: 'demo', title: '绩效管理', moduleId: 'app/style1', nav: true },
                    { route: '', title: '系统维护', moduleId: 'app/login', nav: true },
                    { route: 'app/login', title: '文档管理', moduleId: 'app/login', nav: true },
                    { route: 'demo', title: 'DOA', moduleId: 'app/demo', nav: true },
                ]).buildNavigationModel();
                return router.activate();
            }
        };
    });
