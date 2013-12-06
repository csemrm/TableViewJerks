$.index.addEventListener('swipe', function(e) {
if(e.direction=='right') {
var anim=Ti.UI.createAnimation({
left:'70%',duration:100
});
$.tbl.tableView.animate(anim);
} else if(e.direction=='left') {
var anim=Ti.UI.createAnimation({
left:0,duration:100
});
$.tbl.tableView.animate(anim);
}
});
$.index.open();