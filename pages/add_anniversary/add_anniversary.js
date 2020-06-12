// pages/add_anniversary/add_anniversary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '纪念日时间',
    anniversaryName: ''
  },

  // 点击取消回退到上一个页面
  handleCancel() {
    wx.navigateBack({
      delta: 1   // 回退前 delta(默认为1) 页面
    })
  },

  // 选择纪念日日期
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },

  // 1. 获取到textarea中的文本并存入anniversaryName中
  inputName(e) {
    this.setData({
      anniversaryName: e.detail.value
    })
  },

  // 添加纪念日
  addAnniversary() {
    console.log(this.data.anniversaryName);
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})