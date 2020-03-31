module.exports = {
  // mock
  'GET /mock/userInfo': (req, res) => {
    return res.json({
      code: 0,
      msg: '操作成功',
      datas: {
        name: 'admin'
      }
    })
  }
}
