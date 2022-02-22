<?php
    header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header("Access-Control-Allow-Methods: GET,HEAD,POST,DEBUG,PUT,DELETE,PATCH,OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
    
    header('Content-Type: application/json; charset=UTF-8');
    $valid_data    = array("pluto" => "abc123", "topolino" => "def456");
    $valid_user    = array_keys($valid_data);
    $valid_passwd  = array_values($valid_data);
    $GLOBALS['users']   = $valid_user;
    $GLOBALS['passwd']  = $valid_passwd;
   
    $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING); // for method post
    $user   = $POST['user']; // $_GET['user']; for get
    $passwd = $POST['passwd']; // $_GET['passwd']; for get

    $USER = $user; // $_SERVER['PHP_AUTH_USER'];
    $PASS = $passwd; // $_SERVER['PHP_AUTH_PW'];
    $msg = "";
    $er = 0;
    $validated = (in_array($USER, $valid_user)) && ($PASS == $valid_data[$USER]);
    if(!$validated) {
        $msg = ("unauthorized user");
        $user   = "";
        $passwd = "";
        $er     = 0;
    } else {
        $msg    = ("identified user");
        $er     = 1;
    }
    
    echo '[
        {
            "message" : "'.$msg.'",
            "user" : "'.$user.'",
            "passwd" : "'.$passwd.'",
            "err" : "'.$er.'"
        }
    ]';
?>
