'use strict'
// testing
// cls.messaggio("Call method messaggio");
// fnc.showMyAlert("titolo", "messaggio.", "var(--info)", "var(--white)", "var(--warning)", "var(--dark)");

async function alertDefault(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--darkorchid)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertLoad(msg) {
    await fnc.loader();
    setTimeout(fnc.loaderHide, 2000);
}

async function alertLoadText(msg, img) {
    await fnc.loaderText(msg,'var(--dark)', 'var(--silver)', 'var(--danger)', img, '8px', '75', '75');
    setTimeout(fnc.loaderTextHide, 2000);
}

async function alertWarning(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--warning)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertDanger(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--danger)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertCustomized(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--primary)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function clearControl() {
    let input = document.querySelector('.input-title');
    input.value = "";
    input.focus();
}
// function login second method
async function login() {
    var user   = document.querySelector('.user').value;
    var passwd = document.querySelector('.passwd').value;
    var result = document.querySelector('.result');
    if(!user || !passwd) {
        fnc.showMyAlert("ATTENTION", "USERNAME AND PASSWD required fields", 'var(--warning)', 'var(--danger)', 'var(--dark)', 'var(--danger)');
        return false;
    }
    let url = "docs/pages/auth.php";
    let formData = new FormData();
        formData.append('user', user);
        formData.append('passwd' , passwd);
    // let params = `?user=${user}&passwd=${passwd}` // for method get
    // let hd = new Headers(); // for method get not necesity
    // hd.append('Content-type', 'application/json'); // for method get not necessity
    // let req = new Request(`${url}${params}`, { // for method get
    let req = new Request(url, {
        method: 'POST',
        // headers: hd // for get, not necessity
        mode: 'cors',
        body: formData // for post
    });
    await fetch(req)
    .then((res) => {
        if(res.ok) {
            return Promise.resolve(res.json());
        } else {
            return Promise.reject(
                {
                    message : res.statusText,
                    code : res.status
                }
            )
        }// ./if
    })
    .then((data) => {
        cn.table(
            {
                result : data,
                er : parseInt(data[0].err)
            }
        )
        var msg = new String();
        if(data[0].err == 1) {
            msg = `${data[0].message} welcome ${data[0].user}`;
        } else {
            msg = data[0].message;
        }
        result.innerHTML = "";
        let span = document.createElement('span');
        span.innerHTML = msg;
        result.appendChild(span);
    })
    .catch((error) => {
        cn.table(
            {
                msg : error.message,
                cod : error.code
            }
        )
    })
}// ./login()
async function keyUp() {
    try{
        if(event.keyCode == 13) {
            login();
        } else {
            throw new Error("Non hai premuto key Enter code keyCode 13");
        }
    } catch(Exception) {
        await cn.table(
            {
                msgError: Exception.message,
                nameError: Exception.name,
                linea: Exception.lineNumber
            }
        )
    }
}// ./keyUp()
// XMLHttpRequest
function xmlHttp() {
        try {
            // throw new Error("Hai scritto una variabile senza la parola var");
            var params = 'content={"usr" : "Pluto JS", "psw" : "JavaScript"}';
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "docs/pages/auth.php", true);
            // FOR USE POST
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            // FOR USE POST
            xhr.responseType = 'json';
            xhr.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    console.table(xhr.response);
                } else if (this.readyState == 4 && this.status == 404) {
                    console.error(xhr.statusText, xhr.status);
                }
            } // onreadystatechage
            xhr.send(params);
        } catch(Exception) {
            console.error(Exception.message);
        }
}