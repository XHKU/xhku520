<?php
    $offset = $_POST['offset'];
    $conn = mysqli_connect("localhost","root","","Learn") or die("连接失败");
    mysqli_query($conn,"set names utf8");
    $result = mysqli_query($conn,"select * from whiteboard_messages order by creat_time  DESC limit 2 offset $offset ");    
    $messageArray = array();
    while ($row = mysqli_fetch_array($result))
    {
        $tempArray = array('id'=>$row[id],'message'=>$row[message],'author'=>$row[author],'author_id'=>$row[author_id],'creat_time'=>$row[creat_time]);
        array_push($messageArray,$tempArray);        
    }

    //把消息返回前端        
    if (sizeof($messageArray)> 0)
    {
        echo json_encode($messageArray,JSON_UNESCAPED_UNICODE);
    }
    else
    {
        echo "no message";
    }
    
?>

