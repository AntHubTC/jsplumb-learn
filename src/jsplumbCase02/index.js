import {jsPlumb} from 'jsplumb'
import $ from 'jquery'

let config = {};
config.baseStyle = {
    endpoint: ['Dot', {
        radius: 5
    }], // 端点的形状
    connectorStyle: {
        stroke: '#464a46',
        strokeWidth: '2px'
    }, // 连接线的颜色，大小样式
    connectorHoverStyle: { // 鼠标悬浮在连接线上的样式
        stroke: 'green',
        strokeWidth: '4px'
    },
    paintStyle: {
        radius: 5,
        strokeWidth: 2,
        stroke: '#606265',
        fill: 'white'
    }, // 端点的颜色样式
    hoverPaintStyle: {
        stroke: 'green'
    },
    isSource: true, // 是否可以拖动（作为连线起点）
    connector: ['Straight', {// 连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
        gap: 0,
        cornerRadius: 5,
        alwaysRespectStubs: true
    }],
    isTarget: true, // 是否可以放置（连线终点）
    maxConnections: 1, // 设置连接点最多可以连接几条线
    connectorOverlays: [
        ['Arrow', {
            width: 10,
            length: 10,
            location: 1
        }],
        ['Label', {
            label: '',
            cssClass: '',
            labelStyle: {
                color: 'red'
            },
            events: {
                click: function (labelOverlay, originalEvent) {
                    console.log('click on label overlay for :' + labelOverlay.component)
                    console.log(labelOverlay)
                    console.log(originalEvent)
                }
            }
        }]
    ]
};

function zoomStep (selector, step, min, max) {
    let scale = jsPlumb.getZoom() + step;
    if (scale < min || scale > max) {
        return;
    }
    zoom(selector, scale);
}
function zoom (selector, scale) {
    $(selector).css({
        "-webkit-transform": `scale(${scale})`,
        "-moz-transform": `scale(${scale})`,
        "-ms-transform": `scale(${scale})`,
        "-o-transform": `scale(${scale})`,
        "transform": `scale(${scale})`,
        "transform-origin": '0% 0%'
    });
    jsPlumb.setZoom(scale);
}

jsPlumb.ready(function () {
    jsPlumb.setContainer("diagramBoxIn");


    jsPlumb.setSuspendDrawing(true);

    jsPlumb.addEndpoint(['A1', 'A2', 'A3'], {
        anchors: ['Right']
    }, config.baseStyle);

    jsPlumb.addEndpoint(['B1', 'B2', 'B3', 'B4', 'B5'], {
        anchors: ['Right']
    }, config.baseStyle);

    jsPlumb.addEndpoint(['C1','C2','C3','C4','C5'], {
        anchors: ['Left']
    }, config.baseStyle);

    jsPlumb.addGroup({el: jsPlumb.getElement('G1'), id: "AG"});
    jsPlumb.addGroup({el: jsPlumb.getElement('G2'), id: "BG"});
    jsPlumb.addGroup({el: jsPlumb.getElement('G3'), id: "CG"});

    jsPlumb.addToGroup("AG", jsPlumb.getElement("A1"));
    jsPlumb.addToGroup("AG", jsPlumb.getElement("A2"));
    jsPlumb.addToGroup("AG", jsPlumb.getElement("A3"));

    jsPlumb.addToGroup("BG", jsPlumb.getElement("B1"));
    jsPlumb.addToGroup("BG", jsPlumb.getElement("B2"));
    jsPlumb.addToGroup("BG", jsPlumb.getElement("B3"));
    jsPlumb.addToGroup("BG", jsPlumb.getElement("B4"));
    jsPlumb.addToGroup("BG", jsPlumb.getElement("B5"));

    jsPlumb.addToGroup("CG", jsPlumb.getElement("C1"));
    jsPlumb.addToGroup("CG", jsPlumb.getElement("C2"));
    jsPlumb.addToGroup("CG", jsPlumb.getElement("C3"));
    jsPlumb.addToGroup("CG", jsPlumb.getElement("C4"));
    jsPlumb.addToGroup("CG", jsPlumb.getElement("C5"));

    jsPlumb.setSuspendDrawing(false, true);
    // jsPlumb.setSuspendDrawing(false);
    // jsPlumb.repaintEverything();

    $('#zoomOutBtn').click(function () {
        zoomStep("#diagramBoxIn", -0.05, 0.3, 1.7);
    });
    $('#zoomRevertBtn').click(function () {
        zoom("#diagramBoxIn", 1);
    });
    $('#zoomInBtn').click(function () {
        zoomStep("#diagramBoxIn", 0.05, 0.3, 1.7);
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