module.exports = {
  // mock
  'GET /mock/userInfo': (req, res) => {
    setTimeout(() => {
      return res.json({
        code: 0,
        msg: '操作成功',
        datas: {
          name: 'admin'
        }
      })
    }, 10000)
  }
}
