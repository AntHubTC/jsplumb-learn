import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    jsPlumb.addEndpoint('item_left', {
        anchors: ['Bottom']
    });
    jsPlumb.addEndpoint('item_right', {
        anchors: ['Bottom']
    });
    jsPlumb.addEndpoint('item_right', {
        anchors: ['Left']
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