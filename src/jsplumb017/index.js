import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    let common = {
        isSource: true,
        isTarget: true,
        connector: ['Straight'],
        maxConnections: -1 // 如果你想不限制连线的数量，那么可以将该值设置为-1  默认为1
    };

    jsPlumb.addEndpoint('item_left', {
        anchors: ['Right']
    }, common);

    jsPlumb.addEndpoint('item_right', {
        anchors: ['Left']
    }, common);
});

if (module.hot) {
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}