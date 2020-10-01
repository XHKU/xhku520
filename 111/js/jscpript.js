 $.ajax({
                    url:"php/getBoardmessages.php",
                    type:"POST",
                    async: false,//设置为同步操作就可以给全局变量赋值成功 
                    data:{"info":"get_message","offset":0},
                    success:function(data){
                        console.log(data);
                        if (data == "no message")
                        {
                            $(".js-div-whiteboard-empty-hint").attr("style","display:block;");
                            $(".js-div-whiteboard-messages").attr("style","display:none;");
                            return;
                        }


                        $(".js-div-whiteboard-empty-hint").attr("style","display:none;");
                        $(".js-div-whiteboard-messages").attr("style","display:block;");
                        var info = JSON.parse(data);                        
                        global_whiteboard_message_list = info;//
                        displayWhiteboardMessageList();
                                                
                       },
                    error:function(xhr){alert("错误提示： " + xhr.status + " " + xhr.statusText);}
                    
                });
        

function displayWhiteboardMessageList()
    {
        var text = "";    
        $(".js-ul-whiteboard-message-list").empty();
        for (var i = 0;i < global_whiteboard_message_list.length;i++)
        {
            text = text 
                + "<li class = \"style-fontsize-15\"><span class = \"style-li-whiteboard-user style-fontsize-15-center\">" 
                + global_whiteboard_message_list[i].author 
                + "</span><span class = \"style-li-whiteboard-message\">" 
                + global_whiteboard_message_list[i].message 
                + "</span><span class = \"style-li-whiteboard-date style-fontsize-15-center\">" +　timestamp2time(global_whiteboard_message_list[i].creat_time) 
                + "</span></li><hr class = \"style-hr-full\">";
        }        
        $(".js-ul-whiteboard-message-list").append(text);
    }
 

function timestamp2time(timestamp){
        var stamp = parseInt(timestamp * 1000);//php时间戳只有十位，扩展为13位
        var date = new Date(stamp);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';        
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
    }