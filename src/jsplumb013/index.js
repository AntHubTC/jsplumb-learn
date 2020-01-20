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

    jp.bind('click', function (conn, originalEvent) {
        if (window.prompt('确定删除所点击的链接吗？ 输入1确定') === '1') {
            jp.deleteConnection(conn)
            // 好像版本不一样
            // jp.detach(conn)
        }
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