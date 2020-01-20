import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    let common = {
        // endpoint	String	可选	端点类型，形状
        endpoint: 'Dot',
        // Bezier,Flowchart,StateMachine,Straight
        connector: ['Bezier'],
        // 锚点
        anchor: ['Left', 'Right']
    };

    jsPlumb.connect({
        // source	String,Object,Endpoint	是	连线源的标识，可以是id, element, 或者Endpoint
        source: 'item_left',
        // target	String,Object,Endpoint	是	连线目标的标识，可以是id, element, 或者Endpoint
        target: 'item_right',
        paintStyle: {
            stroke: 'red',
            strokeWidth: 3
        },
        endpointStyle: {
            fill: 'lightgray',
            outlineStroke: 'red',
            outlineWidth: 2
        }
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