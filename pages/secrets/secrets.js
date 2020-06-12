// pages/secrets/secrets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    secret: '',
    secretsList: [
      'java',
      'python',
      'C++'
    ]
  },

  // 获取到输入的悄悄话
  getSecret(e) {
    // console.log(e.detail.value);
    this.setData({
      secret: e.detail.value
    })
  },

  // 将悄悄话放入显示列表中
  addSecret() {
    // 判断文本框内是否有输入
    if (this.data.secret.length != 0) {
      this.setData({
        secretsList: this.data.secretsList.concat(this.data.secret),
        secret: ''
      })
    } else {
      wx.showToast({
        title: '请输入内容再保存！',
        icon: 'none'
      })
    }
  },

  // 长按后移除该项
  removeItem(e) {
    // console.log(e.currentTarget.dataset.index);
    var currentIndex = e.currentTarget.dataset.index;
    var that = this;
    wx.showModal({
      title: '你确定要删除吗？',
      content: '',
      showCancel: true,
      cancelText: '否',
      cancelColor: '#000000',
      confirmText: '是',
      confirmColor: '#ff00fb',
      success: (result) => {
        if(result.confirm){
          that.data.secretsList.splice(currentIndex, 1)
          var newSecretsList = that.data.secretsList;
          that.setData({
            secretsList: newSecretsList
          })
        }
      }
    });
  }
})