import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    let common = {
        isSource: true,
        isTarget: true,
        connector: ['Straight']
    };

    jsPlumb.addEndpoint('item_left', {
        anchors: ['Right']
    }, common);

    jsPlumb.addEndpoint('item_right', {
        anchors: ['Left']
    }, common);

    // 当链接建立前
    jsPlumb.bind('beforeDrop', function (info) {
        let a = 10;
        let b = 2;
        if (a < b) {
            alert('连接建立');
            console.log('链接建立');
            return true // 链接会建立
        } else {
            alert('连接不合法，不允许建立！');
            console.log('链接取消');
            return false // 链接不会建立，注意，必须是false
        }
    })
});

if (module.hot) {
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}