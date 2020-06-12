// pages/ours/ours.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 点击关于我们 跳转到关于我们页面
  handleToOursIntro() {
    wx.navigateTo({
      url: '/pages/ours_intro/ours_intro'
    })
  },

  // 点击悄悄话，跳转到悄悄话页面
  handleToSecrets() {
    wx.navigateTo({
      url: '/pages/secrets/secrets'
    })
  },

  // 点击愿望单 跳转到愿望单页面
  handleToWishes() {
    wx.navigateTo({
      url: '/pages/wishes/wishes'
    })
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