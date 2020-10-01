$(".js-whiteboard-up-page").click(function(){updateWhiteboardMessages("up");});
        $(".js-whiteboard-down-page").click(function(){updateWhiteboardMessages("down");});
        
        $(".js-whiteboard-down-page").attr("style","visibility:hidden;");
        $(".js-whiteboard-up-page").attr("style","visibility:hidden;");
        
        $.ajax({
                    url:"php/getBoardmessages.php",
                    type:"POST",
                    async: false,//设置为同步操作就可以给全局变量赋值成功 
                    data:{"info":"get_message","offset":0},
                    success:function(data){
                        //$(".debug_info").text(data);
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
                        global_whiteboard_message_list = info;

                        /*不止一页*/                        
                        if (global_whiteboard_message_list.length == global_whiteboard_message_limit)
                        {                            
                            $(".js-whiteboard-down-page").attr("style","visibility:visible;");
                        }
                        displayWhiteboardMessageList();
                                                
                       },
                    error:function(xhr){alert("错误提示： " + xhr.status + " " + xhr.statusText);}
                    
                });

 

    2）

function updateWhiteboardMessages(action)
    {
        if (action == "up")
        {
            global_whiteboard_message_offset = global_whiteboard_message_offset - 2;
            $(".js-whiteboard-down-page").attr("style","visibility:visible;");
        }
        else if (action == "down")
        {
            global_whiteboard_message_offset = global_whiteboard_message_offset + 2;
            $(".js-whiteboard-up-page").attr("style","visibility:visible;");
        }
        else
        {
            ;
        }
       
        $.ajax({
                    url:"php/getBoardmessages.php",
                    type:"POST",
                    async: false,//设置为同步操作就可以给全局变量赋值成功 
                    data:{"info":"get_message","offset":global_whiteboard_message_offset},
                    success:function(data){
                        console.log(data);
                        if (data == "no message")
                        {
                            if (action == "up")/*已经到第一页*/
                            {                                
                                $(".js-whiteboard-up-page").attr("style","visibility:hidden;");
                                global_whiteboard_message_offset = global_whiteboard_message_offset + 2;
                            }
                            if (action == "down")/*已经到最后一页*/
                            {                                
                                $(".js-whiteboard-down-page").attr("style","visibility:hidden;");
                                global_whiteboard_message_offset = global_whiteboard_message_offset - 2;
                            }
                            return;
                        }
                        
                        var info = JSON.parse(data);                        
                        global_whiteboard_message_list = info;
                        
                        /*已经到最后一页*/                        
                        if (global_whiteboard_message_list.length < 2)
                        {
                            $(".js-whiteboard-down-page").attr("style","visibility:hidden;");
                        }
                        /*已经到第一页*/
                        if (global_whiteboard_message_offset == 0)
                        {
                            $(".js-whiteboard-up-page").attr("style","visibility:hidden;");
                        }
                        displayWhiteboardMessageList();
                                                
                       },
                    error:function(xhr){alert("错误提示： " + xhr.status + " " + xhr.statusText);}
                    
                });
    }