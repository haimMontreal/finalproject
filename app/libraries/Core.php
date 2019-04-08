<?php

/*
 URL FORMAT /Controller/method/params
 */

class Core {
    protected $currentController = 'Pages';
    protected $currenteMethod = 'index';
    protected $Params = [];

    public function __construct()
    {
        $this->getUrl();
    }

    public function getUrl(){
        echo $_GET['url'];
    }
}