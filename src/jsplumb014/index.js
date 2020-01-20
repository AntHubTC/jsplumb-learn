import 'jsplumb/dist/js/jsplumb'

let jp = window.jsPlumb;

jp.ready(function () {
    jp.connect({
        source: 'item_left',
        target: 'item_right',
        endpoint: 'Rectangle'
    });

    jp.draggable('item_left', {
        containment: 'parent'
    });

    jp.draggable('item_right', {
        containment: 'parent'
    });

    console.log('3 秒后移除左边节点包括它的连线')
    setTimeout(function () {
        // nodeId为节点id, remove方法可以删除节点以及和节点相关的连线
        jp.remove('item_left')
    }, 3000)
});

if (module.hot) {
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}