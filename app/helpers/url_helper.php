<?php
session_start();
// Simple page redirect
function redirect($page){
    header('location: ' . URLROOT . '/' . $page);
}

 function isLoggedIn(){
    if(isset($_SESSION['user_id'])){
        return true;
    } else {
        return false;
    }
}