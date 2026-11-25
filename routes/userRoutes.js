// express module 불러오기
const express = require('express');

// 라우터 생성
const router = express.Router();

// 라우팅 설정
router.route('/reg')
    .get((req, res) => {
        res.render('register');
    })
    .post(async (req, res) => {

    });

    module.exports = router;