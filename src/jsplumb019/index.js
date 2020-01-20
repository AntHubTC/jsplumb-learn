import {jsPlumb} from 'jsplumb'
import $ from 'jquery'

function zoom(scale) {
    $("#diagramContainer").css({
        "-webkit-transform": `scale(${scale})`,
        "-moz-transform": `scale(${scale})`,
        "-ms-transform": `scale(${scale})`,
        "-o-transform": `scale(${scale})`,
        "transform": `scale(${scale})`
    });
    jsPlumb.setZoom(0.75);
}

jsPlumb.ready(function () {
    jsPlumb.setContainer("diagramContainer");

    jsPlumb.connect({
        source: 'A',
        target: 'B',
        endpoint: 'Dot'
    });

    let baseZoom = 1;
    setInterval(() => {
        baseZoom -= 0.1;
        if (baseZoom < 0.5) {
            baseZoom = 1
        }
        zoom(baseZoom)
    }, 1000)
});

if (module.hot) {
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}