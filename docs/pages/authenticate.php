<?php 
$USER   = "PLUTO";
$PASSWD = "61768db8d1a38f1c16d3e6eea812ef423c739068";
if(sha1($_SERVER['PHP_AUTH_PW']) != $PASSWD || $_SERVER['PHP_AUTH_USER'] != $USER) {
    header('WWW-Authenticate: Basic realm="protected area"');
    header('HTTP/1.0 401 Unauthorized');
    echo ("<div style='border: 1px solid var(--darkorchid); border-radius: 8px; width: 50%; position: fixed; top: 25%; left: 25%; text-align: center;'><p class='root-text-color-giallo'>auth failed</p>");
    echo("<p>username: pluto</p><p>password: abc123</p><p>all uppercase</p><p>update your browser</p>");
    echo("<p><a href='../../index.html'><< back</a></p></div>");
    exit;
}
?>
