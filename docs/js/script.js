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
    let params = `?user=${user}&passwd=${passwd}`; // for method get
    let hds = new Headers(); // for method get not necesity
    // hds.append('Content-type', 'application/json'); // for method get not necessity
    hds.append('Content-type', 'application/x-www-form-urlencoded');
    // hds.append('Authorization', 'basicAuth');
    // hds.append("Accept", "*/*");
    /*
    hds.append('Access-Control-Allow-Origin', '*');
    hds.append('Cross-Origin-Resource-Policy', 'cross-origin');
    hds.append("Access-Control-Allow-Methods", "GET, POST, PUT");
    hds.append("Access-Control-Allow-Headers", "Content-Type, Accept");
    hds.append("Cache-Control", "no-cache");
    hds.append('Accept', 'application/json');
    hds.append('Authorization', 'authorizationHeader');
    */
    hds.append('Access-Control-Allow-Origin', '*'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    hds.append('Access-Control-Expose-Headers', 'Content-Length, X-JSON');
    hds.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    hds.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Accept-Language, X-Authorization');
    hds.append('Access-Control-Max-Age', '86400');
    let req = new Request(`${url}${params}`, { // for method get
    //let req = new Request(url, {
        // body: formData, // for post
        // mode: 'cors',
        // headers: hds, // for get, not necessity
        method: "GET"
        // "X-CSRF-TOKEN": 2132123343455465676786
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
        console.table(
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