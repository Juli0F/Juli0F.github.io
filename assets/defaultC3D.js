$(document).ready(function() {
    var code = $(".codemirror-textareaC3D")[0];
    var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        mode: "text/x-java",
        tabSize: 3,
        theme: "ayu-mirage"
    });

});