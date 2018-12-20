KindEditor.plugin("addfile", function (K) {
    var editor = this, name = "addfile";
    editor.plugin.addfile = {
        func:
        function (e) {
            self.am.showDialog('app/dialog/crmView/UploadFileList', editor, null).done(function (rtn) {
            });

            setTimeout(function () {
                UploadDialog.OnUploadFileListClick(editor.ViewData, function (selectedRows) {
                    for (var index = 0; index <= selectedRows.length - 1; index++) {
                        var strHtml = "<a href='" + selectedRows[index].FileUrl + "' urlbase='extensionweb'>" + selectedRows[index].DisplayName + "." + selectedRows[index].Suffix + "</a><br/> ";
                        editor.insertHtml(strHtml);
                    }
                });
            }, 500);
        }
    };
    // 点击图标时执行
    editor.clickToolbar(name, editor.plugin.addfile.func);

});