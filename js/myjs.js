function pro_panel(obj) {
    $.ajax({
            type: "get",
            url:'http://http://bigcode.fudan.edu.cn/kg-debug/featurelocation//',
            data:this.data,
            dataType: 'jsonp',
            jsonp: "callback",
            crossDomain: true,
             error: function (XMLHttpResponse, textStatus, errorThrown) {
                 console.log("1 异步调用返回失败,XMLHttpResponse.readyState:" + XMLHttpResponse.readyState);
                 console.log("2 异步调用返回失败,XMLHttpResponse.status:" + XMLHttpResponse.status);
                 console.log("3 异步调用返回失败,textStatus:" + textStatus);
                 console.log("4 异步调用返回失败,errorThrown:" + errorThrown);
             },
            complete:function(){
                console.log("请求完成")
            },
            success: function (data) {
                alert(data)
            }
        })
}
