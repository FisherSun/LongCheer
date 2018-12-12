define(['plupload/GeelyCRM'],
    function () {
        var GeelyCRMExtensionView = {};
        GeelyCRMExtensionView.ALL = {};
        /*
            获取指定文件名的OSS上传参数
            successCallback：格式function(params){},params为OSS上传参数
            failCallback：格式function(xhr, status, error)
        */
        GeelyCRMExtensionView.ALL.GetAliOSSUploadParams = function (fileName, successCallback, failCallback) {
            var serviceUrl = "/api/alioss/getuploadparams?fileName=" + encodeURIComponent(fileName);
            $.ajax({
                url: serviceUrl,
                type: "Get",
                async: false,
                data: null,
                dataType: "json",
                success: function (data, status, xhr) {
                    successCallback(data);
                },
                error: function (xhr, status, error) {
                    failCallback(xhr, status, error);
                }
            })
        };
        /*
            分页查询指定相关信息的上传文件
            successCallback：格式function(datas){},datas为查询结果，datas.total为总数,data.rows为当前页的数据数组
            failCallback：格式function(xhr, status, error)
        */
        GeelyCRMExtensionView.ALL.QueryUploadFileListByPage = function (regardingType, regardingKey, page, pageSize, successCallback, failCallback) {
            var serviceUrl = "../api/uploadfile/querybyregarding?regardingType=" + encodeURIComponent(regardingType) + "&regardingKey=" + encodeURIComponent(regardingKey) + "&page=" + page.toString() + "&pageSize=" + pageSize.toString();
            $.ajax({
                url: serviceUrl,
                type: "Get",
                async: true,
                data: null,
                dataType: "json",
                success: function (data) {

                    var datas = {};
                    datas.total = data.TotalCount;
                    datas.rows = data.Results;
                    successCallback(datas);
                },
                error: function (xhr, status, error) {
                    failCallback(xhr, status, error);
                }
            })
        };

        /*
            获取指定上传文件在阿里OSS的访问授权访问路径
            successCallback：格式function(url){},url为该文件在oss上的访问路径
            failCallback：格式function(xhr, status, error)
        */
        GeelyCRMExtensionView.ALL.GetAliOSSAccessUrl = function (fileId, successCallback, failCallback) {
            var serviceUrl = "../api/uploadfile/getaliossaccessurl?fileId=" + encodeURIComponent(fileId);
            $.ajax({
                url: serviceUrl,
                type: "Get",
                async: true,
                data: null,
                dataType: "json",
                success: function (url) {
                    successCallback(url);
                },
                error: function (xhr, status, error) {
                    failCallback(xhr, status, error);
                }
            })
        }

        /*
            修改指定的上传文件信息
            fileData：要修改的上传文件信息，包含属性
                      1,fileData.Id:文件Id
                      2,fileData.DisplayName:文件显示名称
            successCallback：格式function(){}
            failCallback：格式function(xhr, status, error)
        */
        GeelyCRMExtensionView.ALL.UpdateUploadFile = function (fileData, successCallback, failCallback) {
            var serviceUrl = "../api/uploadfile/update";
            $.ajax({
                url: serviceUrl,
                type: "POST",
                async: true,
                data: { "Id": fileData.Id, "DisplayName": fileData.DisplayName },
                dataType: "json",
                success: function () {
                    successCallback();
                },
                error: function (xhr, status, error) {
                    failCallback(xhr, status, error);
                }
            })
        }

        /*
            删除指定的上传文件信息
            fileId：要修改的上传文件Id
            successCallback：格式function(){}
            failCallback：格式function(xhr, status, error)
        */
        GeelyCRMExtensionView.ALL.DeleteUploadFile = function (fileId, successCallback, failCallback) {
            var serviceUrl = "../api/uploadfile/delete?id=" + encodeURIComponent(fileId);
            $.ajax({
                url: serviceUrl,
                type: "POST",
                async: true,
                data: null,
                dataType: "json",
                success: function () {
                    successCallback();
                },
                error: function (xhr, status, error) {
                    failCallback(xhr, status, error);
                }
            })
        }


        /*
            执行登陆操作
            参数：
                  1，successCallback，格式function(){},成功后的回调函数
                  2，failCallback，格式为function(errorMessage){},失败后的回调函数
        */
        GeelyCRM.Main.Utility.LoginUser.Login = function (successCallback, failCallback) {
            var token = GeelyCRM.Main.Utility.QuerystringService.GetQuerystring("token");
            var userId = GeelyCRM.Main.Utility.QuerystringService.GetQuerystring("userid");

            var loginUrl = "../api/login/do";
            if (GeelyCRM.Main.Utility.RootPath != null) {
                loginUrl = GeelyCRM.Main.Utility.RootPath + "api/login/do";
            }

            if (token != null && token != "") {
                loginUrl = loginUrl + "?token=" + encodeURIComponent(token);
            }

            var lcid = GeelyCRM.Main.Utility.QuerystringService.GetQuerystring("lcid");
            var getLoginUserInfoUrl = "../api/login/getloginuserinfo";
            if (GeelyCRM.Main.Utility.RootPath != null) {
                getLoginUserInfoUrl = GeelyCRM.Main.Utility.RootPath + "api/login/getloginuserinfo";
            }
            if (lcid != null && lcid != "") {
                getLoginUserInfoUrl = getLoginUserInfoUrl + "?lcid=" + lcid;
            }

            var fun = function () {
                $.ajax({
                    url: getLoginUserInfoUrl,
                    type: "Get",
                    async: true,
                    data: null,
                    dataType: "json",
                    success: function (data, status, xhr) {

                        GeelyCRM.Main.Utility.LoginUser.Lcid = data.Lcid;
                        GeelyCRM.Main.Utility.LoginUser.TimeZoneBias = data.TimeZoneBias;
                        GeelyCRM.Main.Utility.SessionStorage.Set(GeelyCRM.Main.Utility.SessionStorage.Names.LoginUserData, { "Anonymous": GeelyCRM.Main.Utility.LoginUser.Anonymous, "Name": GeelyCRM.Main.Utility.LoginUser.Name, "Lcid": GeelyCRM.Main.Utility.LoginUser.Lcid, "UserId": userId })

                        successCallback();
                    },
                    error: function (xhr, status, error) {
                        var message = error;
                        if (xhr.responseJSON && xhr.responseJSON.Message) {
                            var message = xhr.responseJSON.Message;
                        }

                        failCallback("get from " + getLoginUserInfoUrl + "error:" + message);
                    }
                })
            };
            $.ajax({
                url: loginUrl,
                type: "POST",
                async: true,
                data: null,
                dataType: "json",
                success: function (data, status, xhr) {

                    GeelyCRM.Main.Utility.LoginUser.LoginUser.Anonymous = false;
                    GeelyCRM.Main.Utility.LoginUser.LoginUser.Name = data.Name;
                    GeelyCRM.Main.Utility.LoginUser.Lcid = data.Lcid;
                    GeelyCRM.Main.Utility.LoginUser.TimeZoneBias = data.TimeZoneBias;

                    GeelyCRM.Main.Utility.SessionStorage.Set(GeelyCRM.Main.Utility.SessionStorage.Names.LoginUserData, { "Anonymous": GeelyCRM.Main.Utility.LoginUser.Anonymous, "Name": GeelyCRM.Main.Utility.LoginUser.Name, "Lcid": GeelyCRM.Main.Utility.LoginUser.Lcid, "UserId": userId })

                    successCallback();
                },
                error: function (xhr, status, error) {
                    if (xhr.status == 401) {
                        GeelyCRM.Main.Utility.LoginUser.Anonymous = true;
                        fun();
                    }
                    else {
                        var message = error;
                        if (xhr.responseJSON && xhr.responseJSON.Message) {
                            var message = xhr.responseJSON.Message;
                        }

                        failCallback("get from " + loginUrl + "error:" + message);
                    }
                }
            })
        };

        /*
            执行初始化操作
            参数：
                  1，successCallback，格式function(){},成功后的回调函数
                  2，failCallback，格式为function(errorMessage){},失败后的回调函数
        */
        GeelyCRM.Main.Utility.LoginUser.Init = function (successCallback, failCallback) {

            var userId = GeelyCRM.Main.Utility.QuerystringService.GetQuerystring("userId");
            var loginUserData = GeelyCRM.Main.Utility.SessionStorage.Get(GeelyCRM.Main.Utility.SessionStorage.Names.LoginUserData);
            if (loginUserData != null && userId != null && loginUserData.UserId == userId) {
                GeelyCRM.Main.Utility.LoginUser.Anonymous = loginUserData.Anonymous;
                GeelyCRM.Main.Utility.LoginUser.Name = loginUserData.Name;
                GeelyCRM.Main.Utility.LoginUser.Lcid = loginUserData.Lcid;
                successCallback();
            }
            else {
                GeelyCRM.Main.Utility.LoginUser.Login(successCallback, failCallback);
            }


            //需要定时刷新登陆服务，保持在线
            var loginUrl = "../api/login/do";
            if (GeelyCRM.Main.Utility.RootPath != null) {
                loginUrl = GeelyCRM.Main.Utility.RootPath + "api/login/do";
            }


            var refreashFun = function () {

                $.ajax({
                    url: loginUrl,
                    type: "POST",
                    async: true,
                    data: null,
                    dataType: "json",
                    success: function (data, status, xhr) {

                    },
                    error: function (xhr, status, error) {

                    }
                })

            };

            var circleFun = function () {
                window.setTimeout(function () {
                    refreashFun();
                    circleFun();
                }, 1000 * 1200);
            }

            circleFun();
        };





        //页面初始化操作
        GeelyCRMExtensionView.Init = {};


        //加载多语言数据
        GeelyCRMExtensionView.Init.LoadLanguage = function (waitObj, error) {

            waitObj.LoadLanguage = false;

            GeelyCRM.Main.Utility.Language.Init(function () {
                waitObj.LoadLanguage = true;
            },
            function (errorMessage) {
                waitObj.LoadLanguage = true;
                error.push(new Error(GeelyCRM.Main.Utility.Error.GetLanguageDataError, "获取多语言数据失败:" + error));
            }
            );




        };

        //用户登陆信息初始化
        GeelyCRMExtensionView.Init.LoginUserInit = function (waitObj, error) {
            waitObj.LoginUserInit = false;
            GeelyCRM.Main.Utility.LoginUser.Init(function () {
                waitObj.LoginUserInit = true;
            },
            function (errorMessage) {
                waitObj.LoginUserInit = true;
                error.push(new Error(GeelyCRM.Main.Utility.Error.LoginUserIninError, "登陆用户信息初始化错误:" + error));
            }
            );
        };


        //页面部件
        GeelyCRMExtensionView.PageParts = {};
        //上传文件网格部件
        GeelyCRMExtensionView.PageParts.UploadFileGridView = {};
        //上传文件按钮点击事件
        GeelyCRMExtensionView.PageParts.UploadFileGridView.OnUploadButtonClick = function (containerName) {
            $('#' + containerName + "grid" + "uploadwin").window('open');
        };

        //保存按钮点击事件
        GeelyCRMExtensionView.PageParts.UploadFileGridView.OnSaveButtonClick = function (containerName) {
            var dataGrid = $("#" + containerName + "grid");


            var rows = dataGrid.datagrid('getRows');
            for (var index = 0; index < rows.length; index++) {
                dataGrid.datagrid('endEdit', index);
            }

            //获取所有被改动过的数据行
            var updatedList = dataGrid.datagrid("getChanges", "updated");
            if (updatedList.length == 0) {
                var warningTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.WarningTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);

                $.messager.alert(warningTitle, GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewSaveNoRecordTip, GeelyCRM.Main.Utility.LoginUser.Lcid), "warning");
            }
            else {
                GeelyCRM.Main.View.Utility.Execute(function (waitObj, clear) {

                    waitObj.UpdateData = false;


                    var innerwaitObj = {};

                    var result = {};
                    result.SuccessCount = 0;
                    result.FailCount = 0;
                    result.FailDescription = "";

                    //为每一个改动过的数据行执行修改操作
                    for (var index = 0; index <= updatedList.length - 1; index++) {
                        innerwaitObj["UpdateData" + updatedList[index].Id] = false;

                        var fun = function (innerIndex) {
                            GeelyCRMExtensionView.ALL.UpdateUploadFile(updatedList[innerIndex],
                                function () {
                                    result.SuccessCount++;

                                    innerwaitObj["UpdateData" + updatedList[innerIndex].Id] = true;
                                },
                                function (xhr, status, error) {
                                    result.FailCount++;
                                    result.FailDescription += xhr.responseText + "\n";

                                    innerwaitObj["UpdateData" + updatedList[innerIndex].Id] = true;
                                }
                            );
                        }(index);

                    }

                    //等待每个数据修改操作完成
                    var parallelWait = new GeelyCRM.Main.Utility.ParallelWait(innerwaitObj);
                    parallelWait.Wait(function () {
                        waitObj.UpdateData = true;
                        var strMessage = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.CommonListExecuteResultMessage, GeelyCRM.Main.Utility.LoginUser.Lcid);

                        var infoTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.InfoTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);

                        $.messager.alert(infoTitle, strMessage.format(result.SuccessCount.toString(), result.FailCount.toString(), result.FailDescription), "info");

                        dataGrid.datagrid("acceptChanges");

                    });

                });
            }
        };

        //删除按钮点击事件
        GeelyCRMExtensionView.PageParts.UploadFileGridView.OnDeleteButtonClick = function (containerName) {

            var dataGrid = $("#" + containerName + "grid");

            GeelyCRMExtensionView.PageParts.GetSelectedRows(containerName,
                function (selectedRows) {
                    if (selectedRows.length == 0) {
                        var warningTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.WarningTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);

                        $.messager.alert(warningTitle, GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.NoRecordSelectedTip, GeelyCRM.Main.Utility.LoginUser.Lcid), "warning");
                    }
                    else {
                        GeelyCRM.Main.View.Utility.Execute(function (waitObj, clear) {

                            waitObj.DeleteData = false;


                            var innerwaitObj = {};

                            var result = {};
                            result.SuccessCount = 0;
                            result.FailCount = 0;
                            result.FailDescription = "";

                            //为每一个选中的文件执行删除操作
                            for (var index = 0; index <= selectedRows.length - 1; index++) {
                                innerwaitObj["DeleteData" + selectedRows[index].Id] = false;

                                var fun = function (innerIndex) {
                                    GeelyCRMExtensionView.ALL.DeleteUploadFile(selectedRows[innerIndex].Id,
                                        function () {
                                            result.SuccessCount++;

                                            innerwaitObj["DeleteData" + selectedRows[innerIndex].Id] = true;
                                        },
                                        function (xhr, status, error) {
                                            result.FailCount++;
                                            result.FailDescription += xhr.responseText + "\n";

                                            innerwaitObj["DeleteData" + selectedRows[innerIndex].Id] = true;
                                        }
                                    );
                                }(index);

                            }

                            //等待每个文件删除操作完成
                            var parallelWait = new GeelyCRM.Main.Utility.ParallelWait(innerwaitObj);
                            parallelWait.Wait(function () {
                                waitObj.DeleteData = true;
                                var strMessage = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.CommonListExecuteResultMessage, GeelyCRM.Main.Utility.LoginUser.Lcid);

                                var infoTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.InfoTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);

                                $.messager.alert(infoTitle, strMessage.format(result.SuccessCount.toString(), result.FailCount.toString(), result.FailDescription), "info");

                                //刷新成第一页数据
                                dataGrid.datagrid('getPager').pagination('select', 1);

                            });

                        });
                    }
                });


        };

        //GridView行双击事件
        GeelyCRMExtensionView.PageParts.UploadFileGridView.OnDblClickRow = function (rowIndex, rowData) {
            if (rowData.IsEdit) {
                $("#" + rowData.GridContainerName).datagrid('cancelEdit', rowIndex);
                rowData.IsEdit = false;
            }
            else {
                $("#" + rowData.GridContainerName).datagrid('beginEdit', rowIndex);
                rowData.RowIndex = rowIndex;
                rowData.IsEdit = true;
            }

        };
        //GridView中显示名称的单元格的格式化方法
        GeelyCRMExtensionView.PageParts.UploadFileGridView.DisplayNameCellFormatter = function (value, row, index) {
            var strHtml = "<a href=\"#\" onclick=\"GeelyCRMExtensionView.PageParts.UploadFileGridView.OnDisplayNameClick('" + row.Id + "');return false;\">" + row.DisplayName.ConvertHTML() + "</a>";
            return strHtml;
        };

        //显示名称点击事件
        GeelyCRMExtensionView.PageParts.UploadFileGridView.OnDisplayNameClick = function (id) {
            GeelyCRM.Main.View.Utility.Execute(function (waitObj, clear) {

                waitObj.GetAliOSSAccessUrl = false;
                GeelyCRMExtensionView.ALL.GetAliOSSAccessUrl(id,
                    function (url) {
                        waitObj.GetAliOSSAccessUrl = true;
                        window.location.href = url;
                    },
                    function (xhr, status, error) {
                        waitObj.GetAliOSSAccessUrl = true;
                        alert(xhr.responseText);
                    }
                );
            });
        };

        /*获取选择行方法
            callback:选中行的回调函数，格式function(rows){}
        */
        GeelyCRMExtensionView.PageParts.GetSelectedRows = function (containerName, callback) {
            var dataGrid = $("#" + containerName + "grid");
            //获取所有选中的行
            var selectedRows = dataGrid.datagrid("getSelections");
            callback(selectedRows);
        };
        //上传文件网格部件渲染
        GeelyCRMExtensionView.PageParts.UploadFileGridView.Render = function (waitObj, containerName, errors, regardingType, regardingKey, page, pageSize) {

            //修改EasyUi默认属性
            var okTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.OkTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);
            var cancelTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.CancelTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);
            $.messager.defaults.ok = okTitle;
            $.messager.defaults.cancel = cancelTitle;

            var routeData = Router.getCurrentRouteData();



            var viewData = {};
            viewData.Labels = {};
            viewData.ContainerName = containerName + "grid";
            viewData.Labels.DisplayNameColumnName = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewDisplayNameColumnName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.UniqueNameColumnName = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewUniqueNameColumnName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.SuffixColumnName = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewSuffixColumnName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.SizeColumnName = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewSizeColumnName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarUpload = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewToolBarUploadName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarSave = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewToolBarSaveName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarDelete = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewToolBarDeleteName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.UploadWindowTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewUploadWindowTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.FileSearchButtonName = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewFileSearchButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.FileUploadButtonName = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewFileUploadButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.SelectedFilesLabel = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewSelectedFilesLabelName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.UploadSuccessLabel = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewUploadSuccessLabelName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.UploadFailLabel = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewUploadFailLabelName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.NeedSelectFileTip = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewNeedSelectFileTip, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.DataLoadTip = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.ExecutingText, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.DataPageMessage = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.DataPageMessage, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.DataPageBeforePageMessage = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.DataPageBeforePageMessage, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.DataPageAfterPageMessage = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.DataPageAfterPageMessage, GeelyCRM.Main.Utility.LoginUser.Lcid);


            viewData.PageNumber = page;


            viewData.PageSize = pageSize;

            //获取数据方法
            var funDataLoad = function (waitObj, page, successCallback) {
                $("#" + viewData.ContainerName).datagrid('loading');//打开等待div  

                waitObj.LoadUploadFileGridViewData = false;


                GeelyCRMExtensionView.ALL.QueryUploadFileListByPage(regardingType, regardingKey, page, viewData.PageSize,
                    function (datas) {
                        for (var index = 0; index <= datas.rows.length - 1; index++) {
                            datas.rows[index].GridContainerName = viewData.ContainerName;
                        }
                        $("#" + viewData.ContainerName).datagrid('loadData', datas);
                        successCallback();
                        waitObj.LoadUploadFileGridViewData = true;
                    },
                    function (xhr, status, error) {
                        waitObj.LoadUploadFileGridViewData = true;
                        alert(xhr.responseText);
                    }
                    );

            };



            waitObj.UploadFileGridViewTemplateExecute = false;

            //读取模板
            GeelyCRM.Main.Utility.Template.Get("UploadFileGridViewPart", function (templateContent) {
                //处理模板
                laytpl(templateContent).render(viewData, function (html) {

                    $("#" + containerName).html(html);

                    //加入EasyUI装载成功回调函数
                    GeelyCRM.Main.View.Utility.EasyUiParserOnCompletes.push(function (parseWaitObj) {

                        parseWaitObj.LoadUploadFileGridViewData = false;

                        $("#" + viewData.ContainerName).datagrid({

                            onLoadSuccess: function () {
                                //加载完数据关闭等待的div   
                                $("#" + viewData.ContainerName).datagrid('loaded');

                            },

                        });


                        //设置分页部件
                        $("#" + viewData.ContainerName).datagrid('getPager').pagination({
                            displayMsg: viewData.Labels.DataPageMessage.format("{total}"),
                            beforePageText: viewData.Labels.DataPageBeforePageMessage.format("{pages}"),
                            afterPageText: viewData.Labels.DataPageAfterPageMessage.format("{pages}"),
                            showPageList: false,
                            //displayMsg:'当前显示从 [{from}] 到 [{to}] 共[{total}]条记录',   
                            onSelectPage: function (pPageIndex, pPageSize) {
                                //改变opts.pageNumber和opts.pageSize的参数值，用于下次查询传给数据层查询指定页码的数据   
                                var gridOpts = $("#" + viewData.ContainerName).datagrid('options');
                                gridOpts.pageNumber = pPageIndex;
                                gridOpts.pageSize = pPageSize;
                                viewData.PageSize = pPageSize;
                                funDataLoad(parseWaitObj, pPageIndex, function () {
                                    //刷新当前路径
                                    routeData.Page = pPageIndex;
                                    Router.modifyCurrentPath(routeData);
                                    viewData.PageNumber = routeData.Page;
                                });
                            }
                        });


                        var uploader;
                        var proressbarIds = [];
                        var uploadFileCounts = 0;
                        //初始化数据
                        funDataLoad(parseWaitObj, viewData.PageNumber, function () { });

                        //设置上传窗口打开事件
                        $("#" + viewData.ContainerName + "uploadwin").window(
                            {
                                "onBeforeOpen": function () {
                                    //设置上传控件
                                    uploader = new plupload.Uploader({
                                        runtimes: 'html5',
                                        browse_button: viewData.ContainerName + "filesearch",
                                        //multi_selection: false,
                                        container: document.getElementById(viewData.ContainerName + "filecontainer"),
                                        flash_swf_url: null,
                                        silverlight_xap_url: null,
                                        url: 'http://oss.aliyuncs.com',

                                        init: {
                                            PostInit: function () {
                                                uploadFileCounts = 0;
                                                proressbarIds = [];
                                                document.getElementById(viewData.ContainerName + 'uploadconsole').innerHTML = "";
                                                document.getElementById(viewData.ContainerName + "ossfile").innerHTML = "";
                                                document.getElementById(viewData.ContainerName + "fileupload").onclick = function () {


                                                    if (uploader.files.length == 0) {

                                                        var infoTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.InfoTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);
                                                        $.messager.alert(infoTitle, GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewNeedSelectFileTip, GeelyCRM.Main.Utility.LoginUser.Lcid), "info");
                                                        return false;
                                                    }
                                                    else {
                                                        uploader.start();
                                                    }

                                                    return true;
                                                };
                                            },

                                            FilesAdded: function (up, files) {
                                                plupload.each(files, function (file) {
                                                    document.getElementById(viewData.ContainerName + "ossfile").innerHTML += '<div id="' + viewData.ContainerName + "file" + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b><div id="' + viewData.ContainerName + "file" + file.id + 'p" style="width:100px;"></div>'
                                                    + '</div>';

                                                    proressbarIds.push(viewData.ContainerName + "file" + file.id + "p");

                                                    for (var index = 0; index <= proressbarIds.length - 1; index++) {
                                                        $('#' + proressbarIds[index]).progressbar({
                                                            value: 0
                                                        });
                                                    }


                                                });
                                            },

                                            BeforeUpload: function (up, file) {
                                                var result = false;
                                                //获取文件的OSS参数
                                                GeelyCRMExtensionView.ALL.GetAliOSSUploadParams(file.name, function (params) {
                                                    //构建上传控件的参数设置
                                                    var new_multipart_params = {
                                                        'key': params.Key,
                                                        'policy': params.Policy,
                                                        'OSSAccessKeyId': params.AccessId,
                                                        'success_action_status': '200', //让服务端返回200,不然，默认会返回204
                                                        'signature': params.PolicySignature,
                                                        'callback': params.Callback,
                                                        'x:token': params.Token,
                                                        'x:displayname': params.DisplayName,
                                                        'x:regardingtype': regardingType,
                                                        'x:regardingkey': regardingKey,
                                                        'x:suffix': params.Suffix,
                                                        'x:visitmode': 1,
                                                        'x:executename': "",
                                                        'Content-Type': params.ContentType,
                                                        'Content-Disposition': params.ContentDisposition
                                                    };



                                                    up.setOption({
                                                        'url': params.PostUrl,
                                                        'multipart_params': new_multipart_params
                                                    });
                                                    //up.start();
                                                    result = true;
                                                },
                                                function (xhr, status, error) {
                                                    alert(GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadFileGridViewGetFileOSSParamsErrorTip, GeelyCRM.Main.Utility.LoginUser.Lcid).format(file.name, xhr.responseText));
                                                }
                                                );

                                                return result;
                                            },

                                            UploadProgress: function (up, file) {
                                                $('#' + viewData.ContainerName + "file" + file.id + "p").progressbar('setValue', file.percent);
                                            },

                                            FileUploaded: function (up, file, info) {

                                                if (info.status == 200) {
                                                    var result = JSON.parse(info.response);
                                                    if (result.Result === true) {
                                                        document.getElementById(viewData.ContainerName + "file" + file.id).getElementsByTagName('b')[0].innerHTML = viewData.Labels.UploadSuccessLabel;
                                                        uploadFileCounts++;
                                                    }
                                                    else {
                                                        document.getElementById(viewData.ContainerName + "file" + file.id).getElementsByTagName('b')[0].innerHTML = viewData.Labels.UploadFailLabel.format(result.Description);
                                                    }
                                                }
                                                else {
                                                    document.getElementById(viewData.ContainerName + "file" + file.id).getElementsByTagName('b')[0].innerHTML = viewData.Labels.UploadFailLabel.format(info.response);
                                                }
                                            },

                                            Error: function (up, err) {
                                                document.getElementById(viewData.ContainerName + 'uploadconsole').appendChild(document.createTextNode("\nError xml:" + err.response));
                                            }
                                        }
                                    });
                                    //上传控件初始化
                                    uploader.init();

                                    return true;
                                }
                            });
                        //设置上传窗口关闭事件
                        $("#" + viewData.ContainerName + "uploadwin").window(
                            {
                                "onBeforeClose": function () {
                                    uploader.destroy();
                                    //当有文件成功上传后，需要重新加载数据
                                    if (uploadFileCounts > 0) {
                                        funDataLoad({}, viewData.PageNumber, function () { });
                                    }
                                    return true;
                                }
                            });

                    });

                    waitObj.UploadFileGridViewTemplateExecute = true;
                });

            },
            function (error) {
                error.push(new Error(GeelyCRM.Main.Utility.Error.GetTemplateError, "找不到名称为UploadFileGridViewPart的模板"));

                waitObj.UploadFileGridViewTemplateExecute = true;
                return;
            }
            );







        };



        //富文本编辑器部件
        GeelyCRMExtensionView.PageParts.RichEditor = {};
        /*富文本编辑器部件中的上传文件列表按钮点击时执行的方法
            callback:点击确定后的回调函数，格式为function(selectedRows),selectedRows为选中的行数据
        */
        GeelyCRMExtensionView.PageParts.RichEditor.OnUploadFileListClick = function (viewData, callback) {

            //加载窗口中的上传文件网格部件
            GeelyCRM.Main.View.Utility.Execute(viewData.RichEditorContainerName + "win", function (waitObj, clear) {
                GeelyCRMExtensionView.PageParts.UploadFileGridView.Render(waitObj, viewData.RichEditorContainerName + "uploadgrid", [], viewData.RegardingType, viewData.RegardingKey, 1, 3);

                GeelyCRM.Main.View.Utility.EasyUiParserOnCompletes.push(function (parseWaitObj) {


                    //打开窗口
                    $("#" + viewData.RichEditorContainerName + "win").window("open");
                }
                );

                //为确定按钮赋单击事件
                var confirmBtn = $("#" + viewData.RichEditorContainerName + "confirmbtn");
                confirmBtn.unbind("click");
                confirmBtn.click(function () {
                    GeelyCRMExtensionView.PageParts.GetSelectedRows(viewData.RichEditorContainerName + "uploadgrid", function (selectedRows) {
                        if (selectedRows.length == 0) {
                            var warningTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.WarningTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);
                            $.messager.alert(warningTitle, GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.NoRecordSelectedTip, GeelyCRM.Main.Utility.LoginUser.Lcid), "warning");
                        }
                        else {
                            //使用回调函数
                            callback(selectedRows);
                            //关闭窗体
                            $("#" + viewData.RichEditorContainerName + "win").window("close");
                        }
                    });
                });
            }
            );


        };
        //富文本编辑器部件渲染
        GeelyCRMExtensionView.PageParts.RichEditor.Render = function (waitObj, containerName, errors, regardingType, regardingKey, width, height) {
            var routeData = Router.getCurrentRouteData();

            //获取Lcid对应的语言名称
            var langName = GeelyCRM.Main.View.Utility.LcidMappingService(GeelyCRM.Main.Utility.LoginUser.Lcid);

            var viewData = {};
            viewData.RegardingType = regardingType;
            viewData.RegardingKey = regardingKey;
            viewData.Labels = {};
            viewData.RichEditorContainerName = containerName + "text";
            viewData.RichEditor = {};
            viewData.RichEditor.Setting = {};
            viewData.RichEditor.Setting.Width = width;
            viewData.RichEditor.Setting.Height = height;

            viewData.Labels.SelectFileWindowTitle = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.SelectTitle, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarUpload = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarSave = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.SaveButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarDelete = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.DeleteButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarConfirm = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.ConfirmButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);


            waitObj.RichEditorTemplateExecute = false;


            GeelyCRM.Main.Utility.Template.Get("RichEditorPart",
                function (templateContent) {
                    //处理模板
                    laytpl(templateContent).render(viewData, function (html) {
                        $("#" + containerName).html(html);

                        //加入EasyUI装载成功回调函数
                        GeelyCRM.Main.View.Utility.EasyUiParserOnCompletes.push(function (parseWaitObj) {
                            //装载kindeditor
                            var themesPath = "../Content/Kindeditor/themes/";
                            if (GeelyCRM.Main.Utility.RootPath != null) {
                                themesPath = GeelyCRM.Main.Utility.RootPath + "Content/Kindeditor/themes/";
                            }

                            var pluginsPath = "../Content/Kindeditor/plugins/";
                            if (GeelyCRM.Main.Utility.RootPath != null) {
                                pluginsPath = GeelyCRM.Main.Utility.RootPath + "Content/Kindeditor/plugins/";
                            }

                            var langPath = "../Content/Kindeditor/lang/";
                            if (GeelyCRM.Main.Utility.RootPath != null) {
                                langPath = GeelyCRM.Main.Utility.RootPath + "Content/Kindeditor/lang/";
                            }

                            var ke;


                            var items = ['source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'cut', 'copy', 'paste',
                                         'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                                         'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                                         'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                                         'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                                         'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'addimage',
                                         'flash', 'addmedia', 'addfile', 'table', 'hr', 'emoticons', 'map', 'code', 'pagebreak',
                                         'link', 'unlink', '|'
                            ];

                            var htmlTags = {
                                font: ['color', 'size', 'face', '.background-color'],
                                span: [
                                        '.color', '.background-color', '.font-size', '.font-family', '.background',
                                        '.font-weight', '.font-style', '.text-decoration', '.vertical-align', '.line-height'
                                ],
                                div: [
                                        'align', '.border', '.margin', '.padding', '.text-align', '.color',
                                        '.background-color', '.font-size', '.font-family', '.font-weight', '.background',
                                        '.font-style', '.text-decoration', '.vertical-align', '.margin-left'
                                ],
                                table: [
                                        'border', 'cellspacing', 'cellpadding', 'width', 'height', 'align', 'bordercolor',
                                        '.padding', '.margin', '.border', 'bgcolor', '.text-align', '.color', '.background-color',
                                        '.font-size', '.font-family', '.font-weight', '.font-style', '.text-decoration', '.background',
                                        '.width', '.height'
                                ],
                                'td,th': [
                                        'align', 'valign', 'width', 'height', 'colspan', 'rowspan', 'bgcolor',
                                        '.text-align', '.color', '.background-color', '.font-size', '.font-family', '.font-weight',
                                        '.font-style', '.text-decoration', '.vertical-align', '.background'
                                ],
                                a: ['href', 'target', 'name', 'urlbase'],
                                embed: ['src', 'width', 'height', 'type', 'loop', 'autostart', 'quality', '.width', '.height', 'align', 'allowscriptaccess'],
                                img: ['src', 'width', 'height', 'border', 'alt', 'title', '.width', '.height'],
                                'p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6': [
                                        'align', '.text-align', '.color', '.background-color', '.font-size', '.font-family', '.background',
                                        '.font-weight', '.font-style', '.text-decoration', '.vertical-align', '.text-indent', '.margin-left'
                                ],
                                pre: ['class'],
                                'hr,br,tbody,tr,strong,b,sub,sup,em,i,u,strike': []
                            };
                            ke = KindEditor.create("#" + viewData.RichEditorContainerName, {
                                "items": items,
                                "htmlTags": htmlTags,
                                "width": viewData.RichEditor.Setting.Width.toString() + "px",
                                "height": viewData.RichEditor.Setting.Height.toString() + "px",
                                "langType": langName,
                                "themesPath": themesPath,
                                "pluginsPath": pluginsPath,
                                "langPath": langPath,
                                "afterChange": function () {
                                    this.sync();
                                    //当内容改变，向父窗体发送内容改变动作
                                    var actionObj = {};
                                    actionObj.Name = "RichEditorContentChange";
                                    actionObj.Value = $("#" + viewData.RichEditorContainerName).val();
                                    try {
                                        window.parent.postMessage(actionObj, '*');
                                    }
                                    catch (ex) {

                                    }

                                }
                            });

                            ke.ViewData = viewData;

                        }
                        );



                        waitObj.RichEditorTemplateExecute = true;
                    }
                    );
                },
                function (error) {
                    error.push(new Error(GeelyCRM.Main.Utility.Error.GetTemplateError, "找不到名称为RichEditorPart的模板"));

                    waitObj.UploadFileGridViewTemplateExecute = true;
                    return;
                }
             );
        };



        GeelyCRMExtensionView.Router = {};
        GeelyCRMExtensionView.Router.Handlers = {};
        //错误页
        GeelyCRMExtensionView.Router.Handlers.ErrorPage = {};
        GeelyCRMExtensionView.Router.Handlers.ErrorPage.Render = function (waitObj, containerName, template, routeData) {
            waitObj.TemplateExecute = false;

            //组装视图数据
            var viewData = { "Errors": routeData.Errors };
            viewData.Labels = {};
            try {
                viewData.Labels.ErrorNumber = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.ErrorTemplateErrorNumberLabel, GeelyCRM.Main.Utility.LoginUser.Lcid);
            }
            catch (ex) {
                viewData.Labels.ErrorNumber = "错误号";
            }
            try {
                viewData.Labels.ErrorDescription = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.ErrorTemplateErrorDescriptionLabel, GeelyCRM.Main.Utility.LoginUser.Lcid);
            }
            catch (ex) {
                viewData.Labels.ErrorDescription = "错误描述";
            }

            laytpl(template).render(viewData, function (html) {
                waitObj.TemplateExecute = true;
                $("#" + containerName).html(html);
            });
        };


        //上传文件信息列表页
        GeelyCRMExtensionView.Router.Handlers.UploadFileListViewPage = {};
        GeelyCRMExtensionView.Router.Handlers.UploadFileListViewPage.Render = function (waitObj, containerName, template, routeData) {
            waitObj.TemplateExecute = false;

            //组装视图数据
            var viewData = {}
            viewData.Labels = {};
            viewData.Labels.ToolBarUpload = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.UploadButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarSave = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.SaveButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);
            viewData.Labels.ToolBarDelete = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.DeleteButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);

            //从路由数据获取regardingType，regardingkey
            var routeData = Router.getCurrentRouteData();
            viewData.RegardingType = routeData.RegardingType;
            viewData.RregardingKey = routeData.RegardingKey;


            laytpl(template).render(viewData, function (html) {

                $("#" + containerName).html(html);


                var partsWaitObj = {};
                var partsErrors = [];

                GeelyCRMExtensionView.PageParts.UploadFileGridView.Render(partsWaitObj, "uploadgrid", partsErrors, viewData.RegardingType, viewData.RregardingKey, routeData.Page, 50);


                var partsParallelWait = new GeelyCRM.Main.Utility.ParallelWait(partsWaitObj);
                partsParallelWait.Wait(function () {
                    if (partsErrors.length > 0) {
                        waitObj.TemplateExecute = true;
                        //如果有错误，则转到错误页
                        var errorUrl = Router.generateRouteUrl("error", { "Errors": partsErrors });
                        Router.go(errorUrl);
                    }
                    else {
                        waitObj.TemplateExecute = true;
                    }
                });


            });
        };



        //富文本编辑页
        GeelyCRMExtensionView.Router.Handlers.RichEditorPage = {};
        GeelyCRMExtensionView.Router.Handlers.RichEditorPage.Render = function (waitObj, containerName, template, routeData) {
            waitObj.TemplateExecute = false;

            //组装视图数据
            var viewData = {}
            viewData.Labels = {};
            viewData.Labels.ToolBarSave = GeelyCRM.Main.Utility.Language.GetText(GeelyCRM.Main.Utility.Language.TextNames.SaveButtonName, GeelyCRM.Main.Utility.LoginUser.Lcid);

            //从路由数据获取regardingType，regardingkey
            var routeData = Router.getCurrentRouteData();
            viewData.RegardingType = routeData.RegardingType;
            viewData.RregardingKey = routeData.RegardingKey;


            laytpl(template).render(viewData, function (html) {


                $("#" + containerName).html(html);


                var partsWaitObj = {};
                var partsErrors = [];

                GeelyCRMExtensionView.PageParts.RichEditor.Render(partsWaitObj, "editor", partsErrors, viewData.RegardingType, viewData.RregardingKey, 700, 500);


                var partsParallelWait = new GeelyCRM.Main.Utility.ParallelWait(partsWaitObj);
                partsParallelWait.Wait(function () {
                    if (partsErrors.length > 0) {
                        waitObj.TemplateExecute = true;
                        //如果有错误，则转到错误页
                        var errorUrl = Router.generateRouteUrl("error", { "Errors": partsErrors });
                        Router.go(errorUrl);
                    }
                    else {
                        waitObj.TemplateExecute = true;
                    }
                });


            });
        };

        return GeelyCRMExtensionView;
    });