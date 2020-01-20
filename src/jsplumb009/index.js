import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    jsPlumb.setContainer('diagramContainer');

    let common = {
        isSource: true,
        isTarget: true,
        connector: 'Straight',
        endpoint: 'Dot',
        paintStyle: {
            fill: 'white',
            outlineStroke: 'blue',
            strokeWidth: 3
        },
        hoverPaintStyle: {
            outlineStroke: 'lightblue'
        },
        connectorStyle: {
            outlineStroke: 'green',
            strokeWidth: 1
        },
        connectorHoverStyle: {
            strokeWidth: 2
        }
    };

    jsPlumb.addEndpoint('item_left', {
        anchors: ['Right']
    }, common);

    jsPlumb.addEndpoint('item_right', {
        anchor: 'Left'
    }, common);

    jsPlumb.addEndpoint('item_right', {
        anchor: 'Right'
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