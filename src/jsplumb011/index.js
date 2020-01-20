import {jsPlumb} from 'jsplumb'
import $ from 'jquery'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'

$('.item').resizable({
    resize: function (event, ui) {
        jsPlumb.repaint(ui.helper);
    },
    handles: 'all'
});

jsPlumb.ready(function () {
    jsPlumb.draggable('item_left', {containment: 'parent'});
    jsPlumb.draggable('item_right', {containment: 'parent'});
});

if (module.hot) {
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}