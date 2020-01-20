import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    jsPlumb.makeSource('item_left', {
        endpoint:"Dot",
        anchor: "Continuous",
        maxConnections: 3
    });

    jsPlumb.makeTarget('item_right', {
        endpoint:"Dot",
        anchor: "Continuous",
        maxConnections: 3
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