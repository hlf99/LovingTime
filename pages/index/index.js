/**
 * 1 点击图片 可以预览
 *  1 获取到消息区所有的图片数组
 *  2 接收到当前点击图片的url
 * 2 点赞消息
 *  1 页面onShow时 加载缓存中的消息点赞的数组
 *  2 判断当前消息是否已点赞
 *    1 是 点亮图标
 *    2 否 取消点亮
 *  3 点击点赞图标 
 *    1 判断当前消息是否存在于缓存中
 *    2 存在的话 把该消息的数据删除
 *    3 不存在的话 把该消息添加到点赞数组中 存入缓存  
 */


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标题栏数据
    navItem: [
      {
        name: "热门",
        id: 1,
        isActive: true
      },
      {
        name: "资讯",
        id: 2,
        isActive: false
      },
      {
        name: "音乐",
        id: 3,
        isActive: false
      }, {
        name: "排行榜",
        id: 4,
        isActive: false
      }
    ],
    // 轮播图数据
    swiperItemList: [
      {
        src: 'https://ae01.alicdn.com/kf/H82f112b92b19451db8f72c680c3c7e8cx.jpg',
        id: 0
      },
      {
        src: 'https://ae01.alicdn.com/kf/Hf1162026e93a4dbe935e0df603be23e53.jpg',
        id: 1
      },
      {
        src: 'https://ae01.alicdn.com/kf/H9b32c07cfbfb420592eada516e8003feX.jpg',
        id: 2
      },
      {
        src: 'https://ae01.alicdn.com/kf/Hfce0ea426817453e8c3c77c290c478ed8.jpg',
        id: 3
      },
      {
        src: 'https://ae01.alicdn.com/kf/H8c0fc55a321f45ca85fec7a434162ba8Y.jpg',
        id: 4
      }
    ],
    // 消息区数据
    msgItemList: [
      {
        user_img: 'https://ae01.alicdn.com/kf/Hebfb918e9aed4f17a4c27afbb7b96c36i.png',
        user_name: 'Miracle',
        date: '2020年2月2日 20:20',
        address: '湖南省衡阳市蒸湘区',
        msg_text: '毕业了！',
        msg_img: 'https://ae01.alicdn.com/kf/Hf87aadb3d9e94a0fa23574d9ef646338j.png',
        viewCount: 234,
        msg_id: 101
      },
      {
        user_img: 'https://ae01.alicdn.com/kf/H82356a4cffe64aea96fd03acd359b1d0w.png',
        user_name: 'Rachel',
        date: '2020年2月20日 08:23',
        address: '无',
        msg_text: '^_^',
        msg_img: 'https://ae01.alicdn.com/kf/H74898f1ca5a24d568957c5fa1f479c03S.jpg',
        viewCount: 23,
        msg_id: 101
      }
    ],
    // 资讯列表数据
    informationList: [
      {
        info_id: 10,
        info_title: '旧电脑平板别丢了！将你的屏幕都利用起来',
        info_img: 'https://ae01.alicdn.com/kf/H878404cc1e6f4993b245a6ee7dbb36b69.jpg',
        read_count: 9820
      },
      {
        info_id: 11,
        info_title: '大学宿舍什么样的人容易招室友毒手？这几种室友叫人有去...',
        info_img: 'https://ae01.alicdn.com/kf/H251ae2591af74f8da8d560556832d70aC.jpg',
        read_count: 10000
      },
      {
        info_id: 12,
        info_title: '城管执法将西瓜砸个稀烂，摊主小伙爆发',
        info_img: 'https://ae01.alicdn.com/kf/H056db138ebfa4c2d95a205d1ea373da7y.jpg',
        read_count: 5823
      },
      {
        info_id: 13,
        info_title: '某男子突然跳到水里自杀，为什么？',
        info_img: 'https://ae01.alicdn.com/kf/Hb820d02712dd444dad69dc47f203d7ccM.png',
        read_count: 13000
      }
    ],
    // 音乐列表数据
    musicInfoList: [
      {
        name: '晴天',
        singer: '周杰伦',
        song_id: 1001
      },
      {
        name: '焚梦',
        singer: '十指流玉-焚梦',
        song_id: 1002
      },
      {
        name: 'Apologize',
        singer: 'OneRepublic - Dreaming Out Loud（Tour Edition）',
        song_id: 1003
      },
      {
        name: 'Me and My Broken Heart',
        singer: 'Rixton - Me and My Broken Heart',
        song_id: 1004
      },
      {
        name: 'Flower Dance',
        singer: 'DJ OKAWARI - A Cup Of Coffee',
        song_id: 1005
      },
      {
        name: '我很快乐',
        singer: '刘惜君 - 爱情花园',
        song_id: 1006
      },
      {
        name: 'Letter',
        singer: 'Iris-Your Friendship Means So Much to Me',
        song_id: 1007
      },
      {
        name: '生命树',
        singer: '吴雨霏 - My January（2nd Edition）',
        song_id: 1008
      }
    ],
    // 情侣数排行榜数据
    loversRankList: [
      {
        school: '南华大学',
        num: 9000,
        school_img: 'https://ae01.alicdn.com/kf/H8bad52de43da40ac9ea51f6d91c87a509.jpg'
      },
      {
        school: '东华大学',
        num: 8000,
        school_img: 'https://ae01.alicdn.com/kf/H57ec62a778724dcb9692270285059200V.jpg'
      },
      {
        school: '西华大学',
        num: 7500,
        school_img: 'https://ae01.alicdn.com/kf/H05f3024fbde444cb965adbd69b746910g.jpg'
      },
      {
        school: '北华大学',
        num: 6320,
        school_img: 'https://ae01.alicdn.com/kf/Ha69767f37fce4daa8e430b2a9ccdb886K.jpg'
      },
      {
        school: '清华大学',
        num: 1060,
        school_img: 'https://ae01.alicdn.com/kf/Hb850b7bcf23f42bcb6f70560ac3fa8e3d.jpg'
      }
    ],
    // 消息是否点赞
    isStar: false
  },

  // 标题选中激活
  handleItemNavChange(e) {
    // 1 获取标题索引
    const index = e.currentTarget.dataset.index;
    // 2 修改源数组
    let navItem = this.data.navItem;
    navItem.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    // 3 将修改后的tabs数组重新放回data中
    this.setData({ navItem });
  },

  // 点击‘+’号， 跳转到消息发布界面
  handleOpenPulish() {
    wx.navigateTo({
      url: '/pages/publish_msg/publish_msg'
    })
  },

  // 点击资讯 跳转到资讯详情页面
  handleToInfoDetail() {
    wx.navigateTo({
      url: '/pages/info_detail/info_detail'
    });
  },

  // 点击音乐列表中的音乐 跳转到音乐播放界面
  handleToPlayMusic() {
    wx.navigateTo({
      url: '/pages/music_play/music_play'
    })
  },

  // 点击首页的纪念日，跳转到纪念日页面
  handleToAnniversary() {
    wx.switchTab({
      url: '/pages/anniversary/anniversary'
    })
  },

  // 点击图片 进行预览
  handlePreviewImg(e) {
    // 获取到消息区中的所有图片的数组
    const msgImgs = this.data.msgItemList.map(v => v.msg_img);
    // 接收传递过来的图片url
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current: current, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: msgImgs
    })
  }
})