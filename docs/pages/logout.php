<?php
    header('WWW-Authenticate: Basic realm="protected area"');
    header('HTTP/1.1 401 Unauthorized');
    echo("Logout ...");
    header('Refresh:1; ../../index.html');
    exit;
?>