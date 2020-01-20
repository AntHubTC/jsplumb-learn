import {jsPlumb} from 'jsplumb'
import $ from 'jquery'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'

jsPlumb.ready(function () {
    $('.item').resizable({
        resize: function (event, ui) {
            jsPlumb.repaint(ui.helper)
        },
        handles: 'all'
    });

    jsPlumb.connect({
        source: 'item_left',
        target: 'item_right',
        endpoint: 'Rectangle',
        overlays:[
            ["Custom", {
                create:function(component) {
                    return $("<select id='myDropDown'><option value='foo'>foo</option><option value='bar'>bar</option></select>");
                },
                location:0.7,
                id:"customOverlay"
            }]
        ]
    });

    jsPlumb.draggable('item_left');
    jsPlumb.draggable('item_right');
});

if (module.hot) {
    //console.info(module);
    module.hot.accept(function () {
        //console.info(arguments)
        // 直接刷新，就不用去管事件等遗留问题了。
        location.reload();
    });
}