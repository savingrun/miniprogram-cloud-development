Page({
    data: {
        result: ''
    },

    http: function(event) {
        console.log(event)
        wx.cloud.callFunction({
            name: 'http'
        }).then(res => {
            console.log(JSON.parse(res.result))
            this.setData({
                result: res.result
            })
        })
    }
})