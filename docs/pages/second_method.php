<html lang="it">
<head>
    <!--<meta http-equiv="Content-Security-Policy" content="default-src 'none' ; script-src resource:; "> -->
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="IT">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="iVandamme">
    <meta name="author" content="https://ivanpierdeveloper.it">
    <meta name="keywords" content="app, authenticate, php authenticate">
    <link rel="shortcut icon" href="../../img/all/favicon.png" type="image/x-icon" sizes="16x16">
    <link rel="stylesheet" type="text/css" href="../../docs/css/root.css">
    <link rel="stylesheet" type="text/css" href="../../docs/css/my-alert.css">
    <link rel="stylesheet" href="../../docs/css/style.css">
    <link rel="stylesheet" href="../../docs/css/media-query.css">
    <link rel="stylesheet" href="../../docs/css/tooltip.css" type="text/css">
    <title>Home | Authenticate</title>
    <style type="text/css">
        table {
            table-layout: fixed;
            width: 100%;
            word-wrap: break-word;
            height: auto;
            color: var(--yellow);
        }
        
        table caption {
            color: var(--white);
            text-align: center;
        }
        
        table th {
            border: 1px solid var(--danger);
        }
        
        table td {
            border: 1px solid var(--orange);
            text-align: center;
            font-size: 8pt;
        }
        
        
        .name {
            padding: 18px;
            border: 1px solid var(--white);
            border-radius: 8px;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 8px;
            margin-top: 5px;
            position: relative;
        }
        
        .name span {
            width: 40%;
            position: absolute;
            left: 30%;
            top: 25%;
        }

        .grid {
            width: 80%;
            padding: 18px;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 18px;
            border: 1px solid var(--secondary);
            border-radius: 8px;
            margin-left: auto;
            margin-right: auto;
            color: var(--darkorchid);
        }
       .grid-text{
            width: 80%;
            padding: 18px;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 18px;
            border: 1px solid var(--secondary);
            border-radius: 8px;
            margin-left: auto;
            margin-right: auto;
        }
        h5 {
            color: var(--silver);
            font-weight: bold;
        }
        hr {
            width: 100%;
        } 
    </style>
    
<?php include 'authenticate.php'; ?>
<?php 
    // set PHP_AUTH_USER and PHP_AUTH_PW
    // first method
    /*
        $_SERVER['PHP_AUTH_USER']   = "topolino";
        $_SERVER['PHP_AUTH_PW']     = "def456";
    */
?>
<?php // require_once 'docs/pages/authenticate.php'; ?>
<?php
/*
    print_r("<pre>");
    print_r("user<br />"); 
    print_r($GLOBALS['users']); 
    print_r("passwd<br />");
    print_r($GLOBALS['passwd']);
    print_r("</pre>");
*/
?>
</head>

<body>
    <div class="full-screen"></div>
    <!-- ./full-screen -->
    <div class="my-alert"></div>
    <!-- ./my-alert -->
	<div class="my-alert-message"></div>
	<!-- ./my-alert-message -->
    <div class="loader"></div>
    <!-- loader-->
    <div class="loader-text"></div>
    <!-- loader-text -->
    <div class="container">
        <h1 class="root-text-indianred root-text-align-center root-text-color-blue">PHP AUTHENTICATE</h1>
        <hr />
        <center><h5><a href="../../index.html" class="root-text-color-secondary">first method</a></h5></center>
        <center><h5>welcome to php authenticate, second method</h5></center>
        <div class="grid">
            <!--<div class="tble-excel root-display-none"></div>-->
            <?php 
                $username = $_SERVER['PHP_AUTH_USER'];
                $password = $_SERVER['PHP_AUTH_PW'];
                date_default_timezone_set("Europe/Rome");
                echo ("WELCOME: $username, oggi è: ". date('d-m-Y ( H:i:s )')); // 24H or date('d-m-Y ( h:i:sa )');
            ?>
            <a href="logout.php" class="root-text-color-danger">logout</a>
        </div>
        <!-- ./grid -->
    </div>
    <!-- ./container -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
    <!-- ./lib google ajax -->
    <script lang="javascript" src="../../docs/js/my-alert.js" defer></script>
    <!-- my-alert js -->
    <!-- (defer) non accesso dall'esterno -->
    <script lang="javascript" src="../../docs/js/script.js" defer></script>
    <!-- script js -->
    <script lang="javascript">
        'use strict'
        function name() {
            try {
            
            }// ./try
            catch(Exception) {
                console.error(`Messaggio di errore: ${Exception.message}`);
            }
        }// .name
    </script>
</body>

</html>
