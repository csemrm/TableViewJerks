function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "slidingMenu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.slidingMenu = Ti.UI.createView({
        backgroundColor: "red",
        width: "100%",
        height: "100%",
        zIndex: 0,
        id: "slidingMenu"
    });
    $.__views.slidingMenu && $.addTopLevelView($.__views.slidingMenu);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Testing",
        id: "__alloyId1"
    });
    $.__views.slidingMenu.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;