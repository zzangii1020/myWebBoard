require('dotenv').config();

const express = require('express');

// path 모듈
const path = require('path');

// 서버 생성
const app = express();

// 포트 설정
const PORT = Number(process.env.PORT) || 3000;

app.get('/', (req, res) => {
    res.status(200);
    res.send('myWebBoard');
});
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));



//바디ㅏ서
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 라우터 미들웨이
app.use('/users', require('./routes/userRoutes'));


// 서버 실행
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port:${PORT}`);
});