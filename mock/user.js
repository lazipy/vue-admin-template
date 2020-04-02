module.exports = {
  // 登录
  'GET /mock/login': (req, res) => {
    setTimeout(() => {
      return res.json({
        code: 0,
        msg: '操作成功'
      })
    }, 2000)
  },

  // 用户信息
  'GET /mock/userInfo': (req, res) => {
    setTimeout(() => {
      return res.json({
        code: 0,
        msg: '操作成功',
        datas: {
          name: 'admin'
        }
      })
    }, 1000)
  }
}
