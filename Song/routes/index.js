var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log("in the main page");
  res.render('index', { title: '首页' });
});

router.get('/music/:id', function(req, res) {
  res.render('musicDetail', { title: '音乐详细首页' });
});

router.get('/admin/music', function(req, res) {
  res.render('admin', { title: '后台音乐管理' });
});

router.get('/admin/music/list', function(req, res) {
  res.render('musicList', { title: '后台音乐列表' });
});

module.exports = router;
