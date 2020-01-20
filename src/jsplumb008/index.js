import {jsPlumb} from 'jsplumb'

jsPlumb.importDefaults({
    // 连接上就不能断开了
    // ConnectionsDetachable: false
});
jsPlumb.ready(function () {
    let common = {
        // 是否是源
        isSource: true,
        // 是否是目标
        isTarget: true,
        // Bezier,Flowchart,StateMachine,Straight
        connector: ['Straight'],
        // endpoint	String	可选	端点类型，形状
        endpoint: 'Rectangle'
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