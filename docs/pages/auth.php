<?php
    header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header ("Access-Control-Allow-Methods: GET,HEAD,POST,DEBUG,PUT,DELETE,PATCH,OPTIONS");
    header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
    
    header('Content-Type: application/json; charset=UTF-8');
    $POST = $_POST['content'];
        if($POST) {
            // VEDIAMO I DATI RICEVUTI COME LEGGERE
            $obj = json_decode($POST);
            $usr = ($obj->usr);
            $psw = ($obj->psw);
            $json = '{"utenti" : 
                    {
                    "user" : "'.$usr.'",
                    "psw" : "'.$psw.'"
                    }
                }';
            echo $json;
        } else {
            $json2 = '{"utenti" :
                {"user" : "Nessun dato"}
            }';
            echo $json2;
        }
?>
