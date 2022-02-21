<?php 
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