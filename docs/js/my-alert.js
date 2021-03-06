'use strict'
//############################################################ FUNZIONI ##############################################
const Funcmyalertjs = {
        messaggioMyAlert: function(title, title_color, text) {
            //let el = document.querySelector('.my-alert-testo');
            //el.innerHTML = msg;
            const my_alert = document.querySelector('.my-alert');
            my_alert.innerHTML = "";
            // creo l'elemento
            // image
            var img = document.createElement('img');
            img.src = "img/all/close.png";
            img.alt = "Not image";
            img.classList.add('img-close');
            // title and text
            var div_msg_alert = document.createElement('div');
            var h1 = document.createElement('h1');
            var node_title = document.createTextNode(title);
            var hr = document.createElement('hr');
            var h4 = document.createElement('h4');
            var node_testo = document.createTextNode(text);
            h1.style.setProperty('color', `${title_color}`);
            h1.appendChild(node_title);
            h4.appendChild(node_testo);
            div_msg_alert.appendChild(h1)
            div_msg_alert.appendChild(hr);
            div_msg_alert.appendChild(h4);
            my_alert.appendChild(img);
            my_alert.appendChild(div_msg_alert);
            var img_event = document.querySelector('.img-close');
            img_event.addEventListener('mousedown', function() {
                Funcmyalertjs.closeMyAlert();
            });
        }, // messaggio my-alert

        showMyAlert: function(title, text, background_color, title_color, text_color, border_color) {
            $('.full-screen').css({
                'display': 'block'
            });
            $('.my-alert').css({
                'background-color': background_color,
                'color': text_color,
                'border-color': border_color,
                'top': '50%',
                'transition': '2s'
            });
            this.messaggioMyAlert(title, title_color, text)
        }, // mostro my-alert

        closeMyAlert: function() {
            $('.full-screen').css({
                'display': 'none'
            });
            $('.my-alert').css({
                'position': 'fixed',
                'top': '-50%',
                'transition': '2s'
            });
            setTimeout((clear_div) => {
                const my_alert = document.querySelector('.my-alert').innerHTML = "";
            }, 500);
        }, // chiudo my-alert
        loader: function() {
            const fullScreen = document.querySelector(".full-screen");
            const loader = document.querySelector(".loader");
            $(fullScreen)
                .fadeOut("slow")
                .css({
                    "display": "block"
                });
            $(loader)
                .fadeOut('slow')
                .css({
                    "display": "block"
                });
        },
        loaderHide: function() {
            const fullScreen = document.querySelector(".full-screen");
            const loader = document.querySelector(".loader");
            $(fullScreen)
                .fadeOut("slow")
                .css({
                    "display": "none"
                });
            $(loader)
                .fadeOut('slow')
                .css({
                    "display": "none"
                });
        },
        loaderText: function(text, background_color, text_color, border_color, img_loader, border_radius, w, h) {
            const fullScreen = document.querySelector(".full-screen");
            const loader_text = document.querySelector(".loader-text");
            // create img close
            let closeAlert = document.createElement('img');
            closeAlert.src = 'img/all/close.png';
            closeAlert.alt = "Not image";
            closeAlert.classList.add('chiudi-alert');
            closeAlert.width = '30';
            closeAlert.height = '30';
            let cas = closeAlert.style;
            cas.setProperty('position', 'absolute');
            cas.setProperty('left', '5px');
            cas.setProperty('top', '5px');
            cas.setProperty('cursor', 'pointer');
            // creo elemento testo e immagine
            var img = document.createElement('img');
            var hr = document.createElement('hr');
            var txt = document.createElement('h4');
            var node_text = document.createTextNode(text);
            txt.appendChild(node_text);
            img.width = w;
            img.height = h;
            img.src = img_loader;
            img.alt = "Not image";
            // img.style.setProperty('border', '1px solid var(--silver)');
            // img.style.setProperty('border-radius', border_radius);
            loader_text.style.setProperty('background-color', background_color);
            loader_text.style.setProperty('color', text_color);
            loader_text.style.setProperty('border', `1px solid ${border_color}`);
            // loader_text.appendChild(closeAlert);
            loader_text.appendChild(img);
            loader_text.appendChild(hr);
            loader_text.appendChild(txt);
            $(fullScreen)
                .fadeOut("slow")
                .css({
                    "display": "block"
                });
            $(loader_text)
                .fadeOut('slow')
                .css({
                    "display": "block"
                });
        },
        loaderTextHide: function() {
            const fullScreen = document.querySelector(".full-screen");
            const loader_text = document.querySelector(".loader-text");
            $(fullScreen)
                .fadeOut("slow")
                .css({
                    "display": "none"
                });
            $(loader_text)
                .fadeOut('slow')
                .css({
                    "display": "none"
                });
            setTimeout(function() {
                loader_text.innerHTML = "";
            }, 500);
        },
        stampa: function(voce1, voce2, voce3, voce4, voce5) {
            return console.table({
                "voce-1": voce1,
                "voce-2": voce2,
                "vode-3": voce3,
                "voce-4": voce4,
                "voce-5": voce5
            });
        }
    } // ########################################################### ./FUNZIONI ##############################################

// CALL FUNCTION
const fnc = Funcmyalertjs;

// ################################################################# CLASSI #########################################################
class Classmyalertjs {
    messaggio(msg) {
        console.warn(msg);
    }
    stampaDATA(data) {
        return console.table({
            "stampa dati": data
        });
    }

} // ################################################################# ./CLASSI #########################################################

// CALL CLASS.
const cls = new Classmyalertjs();
// cls.stampaDATA("STAMPA DATA");

// CALL CONSOLE
const cn = console;
