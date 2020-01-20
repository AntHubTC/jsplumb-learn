import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    jsPlumb.addEndpoint('item_left', {
        anchors: ['Right'],
        uuid: 'fromId'
    });

    jsPlumb.addEndpoint('item_right', {
        anchors: ['Left'],
        uuid: 'toId'
    });

    console.log('3 秒后建立连线');
    setTimeout(function () {
        jsPlumb.connect({ uuids: ['fromId', 'toId'] }, {
            connector: ['Straight']
        })
    }, 3000);
});

if (module.hot) {
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}