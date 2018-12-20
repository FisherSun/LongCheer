KindEditor.plugin("addimage", function (K) {
    var editor = this, name = "addimage";
    editor.plugin.addimage = {
        func:
        function (e) {
            //弹出列表选择框   
            self.am.showDialog('app/dialog/crmView/UploadFileList', editor, null).done(function (rtn) {
            });

            setTimeout(function () {
                UploadDialog.OnUploadFileListClick(editor.ViewData, function (selectedRows) {
                    for (var index = 0; index <= selectedRows.length - 1; index++) {
                        var strHtml = "";
                        if ("jpg,gif,jpeg,png,bmp".indexOf(selectedRows[index].Suffix.toLowerCase()) >= 0) {
                            strHtml = "<img width='100%;' alt='" + selectedRows[index].DisplayName+"' src='" + selectedRows[index].FileUrl + "' urlbase='extensionweb' />";
                        }
                        else if ("mp4,flv,webm,ogv,mpg".indexOf(selectedRows[index].Suffix.toLowerCase()) >= 0) {
                            strHtml = "<video src='" + selectedRows[index].FileUrl + "' alt='" + selectedRows[index].DisplayName +"' urlbase='extensionweb' controls='controls'/>";
                        }

                        editor.html(editor.html() + strHtml);
                    }
                });
            }, 500);
        }
    };
    // 点击图标时执行
    editor.clickToolbar(name, editor.plugin.addimage.func);
});
