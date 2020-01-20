import graphlib from 'graphlib'

let data = {
    nodes: [
        {
            name: '刘一'
        },
        {
            name: '陈二'
        },
        {
            name: '张三'
        },
        {
            name: '李四'
        },
        {
            name: '王五'
        },
        {
            name: '赵六'
        },
        {
            name: '孙七'
        },
        {
            name: '周八'
        },
        {
            name: '吴九'
        },
        {
            name: '郑十'
        }
    ],
    links: [
        {
            from: '刘一',
            to: '陈二'
        },
        {
            from: '陈二',
            to: '张三'
        },
        {
            from: '张三',
            to: '李四'
        },
        {
            from: '李四',
            to: '王五'
        },
        {
            from: '王五',
            to: '赵六'
        },
        {
            from: '赵六',
            to: '孙七'
        },
        {
            from: '孙七',
            to: '周八'
        },
        {
            from: '周八',
            to: '吴九'
        },
        {
            from: '刘一',
            to: '赵六'
        },
        {
            from: '赵六',
            to: '周八'
        },
        {
            from: '王五',
            to: '周八'
        },
        {
            from: '陈二',
            to: '王五'
        }
    ]
};

// let g = new graphlib.Graph({
//     directed: true, // directed 该值为true时图为有向图，default：true
//     compound: true, // multigraph 该值为true时允许一个图在同一对节点之间有多个边，default：false
//     multigraph: true // compound 该值为true时允许图具有复合节点-节点可以是其他节点的父节点， default：false
// });
let g = new graphlib.Graph();

// 图形标签
// g.setGraph('aaa');
// g.graph(); // aaa

// 节点
for (let node of data.nodes) {
    g.setNode(node.name);
}

// 连线
for (let link of data.links) {
    g.setEdge(link.from, link.to);
}

console.info(graphlib)
console.info(g);
// https://blog.csdn.net/qq_32773935/article/details/81236461