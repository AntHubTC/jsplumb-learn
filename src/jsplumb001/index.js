import {jsPlumb} from 'jsplumb'

jsPlumb.ready(function () {
    jsPlumb.connect({
        // source	String,Object,Endpoint	是	连线源的标识，可以是id, element, 或者Endpoint
        source: 'item_left',
        // target	String,Object,Endpoint	是	连线目标的标识，可以是id, element, 或者Endpoint
        target: 'item_right',
        // endpoint	String	可选	端点类型，形状
        endpoint: 'Dot'
    });
});