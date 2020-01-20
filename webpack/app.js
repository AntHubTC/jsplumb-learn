module.exports = {
    commonChunk: ['webpack-hot-middleware/client?noInfo=true&reload=true'],
    pages: [
        {path: 'index'},
        {path: 'index2', tpl: 'template'},
        {path: 'jsplumb', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb001', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb002', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb003', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb004', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb005', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb006', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb007', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb008', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb009', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb010', tpl: 'index', chunks: ['jsplumb', 'jquery']},
        {path: 'jsplumb011', tpl: 'index', chunks: ['jsplumb', 'jquery']},
        {path: 'jsplumb012', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb013', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb014', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb015', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb016', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb017', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb018', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb019', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb020', tpl: 'index', chunks: ['jsplumb']},
        {path: 'jsplumb021', tpl: 'index', chunks: ['jsplumb']},

        {path: 'jsplumbCase01', tpl: 'index', chunks: ['jsplumb', 'jquery']},
        {path: 'jsplumbCase02', tpl: 'index', chunks: ['jsplumb', 'jquery']},

        // graphlib 学习
        {path: 'graphlib001', chunks: ['graphlib']}
    ]
};