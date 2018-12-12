define(['laytpl', 'kindeditor-min', 'plugins/router', 'jsRuntime/resourceManager', 'jsRuntime/utility', 'plugins/dialog', 'jsRuntime/parManager', 'common/dicService', 'jsRuntime/actionManager'],
function (laytpl, kindeditor, router,rm, utility, dialog, pm, dicService, am) {
    var self = this;
    var langName = "zh_CN", RootPath = null;
    this.rm = rm.global;
    this.am = am.global;
    var waitObj = {};
    var editor;
    var richeditor = {
        //富文本框渲染
        Render: function (waitObj, containerName, errors, regardingType, regardingKey, isexp, EndpointName, width, height) {
           // var routeData = router.getCurrentRouteData();
            //获取Lcid对应的语言名称

            var viewData = {};
            viewData.Init = false;
            viewData.isexp = isexp;
            viewData.RegardingType = regardingType;
            viewData.RegardingKey = regardingKey;
            viewData.EndpointName = EndpointName;
            viewData.Labels = {};
            viewData.RichEditorContainerName = containerName + "text";
            viewData.RichEditor = {};
            viewData.RichEditor.Setting = {};
            viewData.RichEditor.Setting.Width = width;
            viewData.RichEditor.Setting.Height = height;

            viewData.Labels.SelectFileWindowTitle = "选择文件";//self.rm.label.selectFileWindowTitle();
            viewData.Labels.ToolBarUpload = self.rm.button.buttonUpload();
            viewData.Labels.ToolBarSave = self.rm.button.buttonSave();
            viewData.Labels.ToolBarDelete = self.rm.button.buttonDelete();
            viewData.Labels.ToolBarConfirm = self.rm.button.buttonConfirm();

            waitObj.RichEditorTemplateExecute = false;

            utility.GetTemplate("RichEditorPart",
                function (templateContent) {
                    //处理模板
                    laytpl(templateContent).render(viewData, function (html) {
                        $("#" + containerName).html(html);
                        var RichEditorPart = this;
                        //加入EasyUI装载成功回调函数
                        this.RichEditorPartComplete = function () {
                            //装载kindeditor
                            var themesPath = "../Content/Kindeditor/themes/";
                            if (RootPath != null) {
                                themesPath = RootPath + "Content/Kindeditor/themes/";
                            }

                            var pluginsPath = "../Content/Kindeditor/plugins/";
                            if (RootPath != null) {
                                pluginsPath = RootPath + "Content/Kindeditor/plugins/";
                            }

                            var langPath = "../Content/Kindeditor/lang/";
                            if (RootPath != null) {
                                langPath = RootPath + "Content/Kindeditor/lang/";
                            }

                            var ke;


                            var items = ['source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'cut', 'copy', 'paste',
                                         'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                                         'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                                         'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                                         'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                                         'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'addimage',
                                         'flash',  'addfile', 'table', 'hr', 'emoticons', 'map', 'code', 'pagebreak',
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
                                "filterMode": false,
                                "afterChange": function () {

                                    if (viewData.Init) {
                                        this.sync();
                                        //当内容改变，向父窗体发送内容改变动作
                                        var actionObj = {};
                                        actionObj.Name = "RichEditorContentChange";
                                        actionObj.Value = this.html();
                                        try {
                                            window.parent.postMessage(actionObj, '*');
                                        }
                                        catch (ex) {

                                        }
                                    }
                                }
                            });
                            ke.ViewData = viewData;
                            editor = ke;


                            window.addEventListener("message", function (event) {
                                if (event && event.data && event.data.Name) {
                                    if (event.data.Name == "PostValue") {
                                        //为富文本内容赋值event.data.Value
                                        var data = event.data.Value;
                                        editor.html(data);
                                        viewData.Init = true;
                                        
                                    }
                                }
                            }, false);
                            try {
                                window.parent.postMessage({ "Name": "RichEditorContentRequest" }, '*');
                            }
                            catch (ex) {

                            }

                        };
                        RichEditorPart.RichEditorPartComplete();
                        waitObj.RichEditorTemplateExecute = true;
                    }
                    );
                },
                function (error) {
                    console.debug("找不到名称为RichEditorPart的模板");
                    waitObj.UploadFileGridViewTemplateExecute = true;
                    return;
                }
             );
        },
        //获取初始化参数，加载Page模板渲染富文本框
        PageRender : function (waitObj, containerName, template,param) {
            waitObj.TemplateExecute = false;

            //组装视图数据
            var viewData = {}
            viewData.Labels = {};
            viewData.Labels.ToolBarSave = self.rm.button.buttonSave();

            //从路由数据获取regardingType，regardingkey
            viewData.isexp = param.isexp;
            viewData.RegardingType = param.RegardingType;
            viewData.RegardingKey = param.RegardingKey;
            viewData.EndpointName = param.EndpointName;


            laytpl(template).render(viewData, function (html) {
                $("#" + containerName).html(html);


                var partsWaitObj = {};
                var partsErrors = [];

                richeditor.Render(partsWaitObj, "editor", partsErrors, viewData.RegardingType, viewData.RegardingKey, viewData.isexp, viewData.EndpointName, 700, 500);


                var partsParallelWait = new GeelyCRM.Main.Utility.ParallelWait(partsWaitObj);
                partsParallelWait.Wait(function () {
                    if (partsErrors.length > 0) {
                        waitObj.TemplateExecute = true;
                        //如果有错误，则转到错误页
                        router.navigate("#error");
                    }
                    else {
                        waitObj.TemplateExecute = true;
                    }
                });
            });
        },
        Init: function (name, execute,param) {
            $.isLoading();
            //加载富文本框对应模版
            var templateName = "richeditorpage";

            var executeFun=function(templateContent)
            {
                var waitObj = {};
                execute(waitObj, name, templateContent, param);

                var parallelWait = new GeelyCRM.Main.Utility.ParallelWait(waitObj);
                parallelWait.Wait(function () {
                    $.isLoading('hide');
                });
            }

            utility.GetTemplate(templateName, function (templateContent) {
                executeFun(templateContent);
            },
                function failCallback(error) {
                    alert("获取模板" + templateName + "失败:" + error);
                });
        },
        //创建富文本
        Create : function (name,param) {
            richeditor.Init(name, richeditor.PageRender,param)
        },
        GetEditorHtml: function () {
            return editor.html();
        }
    }
    return richeditor;
});
