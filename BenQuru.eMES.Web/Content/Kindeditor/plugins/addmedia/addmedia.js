KindEditor.plugin("addmedia", function (K) {
    var editor = this, name = "addmedia";
    editor.plugin.addmedia = {
        func:
        function (e) {

            GeelyCRMExtensionView.PageParts.RichEditor.OnUploadFileListClick(editor.ViewData, function (selectedRows) {
                for (var index = 0; index <= selectedRows.length - 1; index++) {
                    //  var strHtml = "<a href='" + selectedRows[index].FileUrl + "' urlbase='extensionweb'>" + selectedRows[index].DisplayName + "</a> ";
                    //var strHtml = "<video src='" + selectedRows[index].FileUrl + "' urlbase='extensionweb'>" + selectedRows[index].DisplayName + "</video> ";
                    var strHtml = "<video src='" + selectedRows[index].FileUrl + "' urlbase='extensionweb' />";

                    editor.insertHtml(strHtml);
                }

            });
        }
    };
    // 点击图标时执行
    editor.clickToolbar(name, editor.plugin.addmedia.func);
});