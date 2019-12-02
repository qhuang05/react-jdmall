const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mockData = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user/login', (req, res)=>{
    const {username, password} = req.body;
    if(username=='admin' || username=='test'){
        res.json({
            status: 1000,
            code: 'success',
            msg: '登录成功',
            data: username
        })
    } else{
        res.json({
            status: 1000,
            code: 'fail',
            msg: '用户不存在'
        })
    }
});

app.post('/user/logout', (req, res)=>{
    const {username} = req.body;
    res.json({
        status: 1000,
        msg: '退出成功'
    })
});

app.get('/user/getRoles', (req, res)=>{
    const {username} = req.body;
    let roles = [];
    switch(username){
        case 'admin':
            roles = ['admin'];
            break;
        default:
            roles = ['test'];
    }
    res.json({
        status: 1000,
        msg: '操作成功',
        data: roles
    })
});

// 其它通用测试接口数据
app.get('/api/test', (req, res) => {
    const { type } = req.query;
    let data = '';
    switch(type){
        case 'banner':
            data = mockData.banners;
            break;
        case 'menu':
            data = mockData.menus;
            break;
        case 'seckill':
            data = mockData.secondKills;
            break;
        case 'category':
            data = mockData.categorys;
            break;
    }
    res.json({
        status: 1000,
        msg: '操作成功',
        data
    })
})

// 分页商品列表
app.post('/product/list', (req, res)=>{
    const {page, pageSize} = req.body;
    const list = [];
    for(let i=0; i<pageSize; i++){
        list.push({
            id: Math.round(Math.random()*10000),
            img: mockData.products[i].image,
            name: mockData.products[i].name,
            price: mockData.products[i].price
        })
    }
    res.json({
        status: 1000,
        msg: '操作成功',
        data: {
            data: list,
            page,
            pageSize,
            hasMore: page>=5 ? false : true
        }
    })
})

app.listen(5000, ()=>{
    console.log('Listening port 5000...');
});