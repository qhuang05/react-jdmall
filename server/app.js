const express = require('express')
const app = express()
const bodyParser = require('body-parser')

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
        case 'test':
            roles = ['test'];
            break;
        default:
            roles = ['admin'];
    }
    res.json({
        status: 1000,
        msg: '操作成功',
        data: roles
    })
});

app.listen(5000, ()=>{
    console.log('Listening port 5000...');
});