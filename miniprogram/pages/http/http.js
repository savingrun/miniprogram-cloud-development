Page({
    data: {
        url: null,
        result: null
    },

    url: function (event) {
        var url = event.detail.value;
        console.log(url)
        this.setData({
            url: url,
        });
    },

    http: function(event) {
        if (!this.data.url) {
            wx.showToast({
                title: '请求URL不能为空',
                icon: 'none',
                duration: 2000
            })
            return
        }
        //https://www.v2ex.com/api/topics/hot.json
        console.log("请求URL：" + this.data.url)
        wx.cloud.callFunction({
            name: 'http',
            data: {
                url: this.data.url
            }
        }).then(res => {
            console.log(JSON.parse(res.result))
            this.setData({
                result: res.result
            })
        })
    }
})