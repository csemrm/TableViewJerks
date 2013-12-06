function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.tbl = Alloy.createController("tableView", {
        id: "tbl",
        __parentSymbol: $.__views.index
    });
    $.__views.tbl.setParent($.__views.index);
    $.__views.sld = Alloy.createController("slidingMenu", {
        id: "sld",
        __parentSymbol: $.__views.index
    });
    $.__views.sld.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.addEventListener("swipe", function(e) {
        if ("right" == e.direction) {
            var anim = Ti.UI.createAnimation({
                left: "70%",
                duration: 100
            });
            $.tbl.tableView.animate(anim);
        } else if ("left" == e.direction) {
            var anim = Ti.UI.createAnimation({
                left: 0,
                duration: 100
            });
            $.tbl.tableView.animate(anim);
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;