<?php
    session_start();
    $message = $_POST['message'];
    $author = $_POST['author'];
    $author_id = $_POST['author_id'];

    $conn = mysqli_connect("localhost","root","","Learn") or die("连接失败");
    mysqli_query($conn,"set names utf8");
    
    $time = time();
    $var = mysqli_query($conn,"insert into whiteboard_messages(message,author,author_id,creat_time)values('$message','$author','$author_id','$time')");
    echo 'white2board success';   
        
    
?>