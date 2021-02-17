<?php

function redirect_to($location=null)
{
    if($location!=null){
        header('Location: '.$location);
        exit;
    }
}