
require('dotenv').config();
// mysql 모듈 불러오기
const mysql = require('mysql2/promise');

// DB 연결 설정
const dbConfig = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DATABASE,
    connectionLimit: 5
};

// 데이터베이스 연결 풀 생성
const connPool = mysql.createPool(dbConfig);

// 모듈 내보내기
module.exports = connPool;