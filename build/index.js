/*datatype*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*control flow analysis*/
function projectStatus(x) {
    if (typeof x === 'string') {
        // x는 string 이거나 number type
        x = 10;
    }
    return x;
}
console.log(projectStatus("human"));
/*capsulize*/
var News = /** @class */ (function () {
    function News() {
    }
    return News;
}());
var espn = new News();
espn.channelNumber = 1;
espn.newsTitle = 'NFL Today';
console.log(espn.newsTitle);
console.log(espn.channelNumber);
/*heritage*/
var Editor = /** @class */ (function () {
    function Editor(name, isTypeScriptCompatible) {
        this.name = name;
        this.isTypeScriptCompatible = isTypeScriptCompatible;
    }
    Editor.prototype.details = function () {
        console.log("Editor: " + this.name, " TypeScript Installed: " + this.isTypeScriptCompatible + " ");
    };
    return Editor;
}());
var VisualStudioCode = /** @class */ (function (_super) {
    __extends(VisualStudioCode, _super);
    function VisualStudioCode(name, isTypeScriptCompatible, OSType) {
        var _this = _super.call(this, name, isTypeScriptCompatible) || this;
        _this.OSType = OSType;
        return _this;
    }
    return VisualStudioCode;
}(Editor));
var VS = new VisualStudioCode('vsCode', true, 'all');
VS.details();
//# sourceMappingURL=index.js.map