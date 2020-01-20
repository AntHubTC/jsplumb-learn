import {jsPlumb} from 'jsplumb'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'

jsPlumb.ready(function () {
    jsPlumb.setContainer('diagramContainer');
    jsPlumb.draggable('item_left', {
        containment: 'parent',
        grid: [10, 10]
    });
    jsPlumb.draggable('item_right', {
        containment: 'parent',
        grid: [10, 10]
    });
});

if (module.hot) {
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}