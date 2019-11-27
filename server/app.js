const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mockData = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/user/login', (req, res)=>{
    const {username} = req.body;
    if(username=='admin' || username=='test'){
        res.json({
            status: 1000,
            msg: '登录成功',
            data: username
        })
    } else{
        res.json({
            status: -1,
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

app.post('/api/test', (req, res) => {
    res.json({
        status: 1000,
        msg: '操作成功'
    })
})

app.post('/product/list', (req, res)=>{
    const {page, pageSize} = req.body;
    const list = [];
    for(let i=0; i<pageSize; i++){
        list.push({
            id: Math.round(Math.random()*10000),
            name: '名称：'+ (Math.random()*10000).toFixed(2),
            img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png'
        })
    }
    res.json({
        status: 1000,
        msg: '操作成功',
        data: {
            data: list,
            page,
            pageSize,
            hasMore: page>=3 ? false : true
        }
    })
})

app.post('/recommend/list', (req, res)=>{
    const {page, pageSize} = req.body;
    const list = [];
    for(let i=0; i<pageSize; i++){
        list.push({
            id: Math.round(Math.random()*10000),
            img: mockData.images[i],
            name: '女巫和骑士 原创设计师女装品牌英伦风长袖毛衣女2019秋冬新款半高圆领拼色套头衫气质网红百搭款 蓝 M',
            price: '89'
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