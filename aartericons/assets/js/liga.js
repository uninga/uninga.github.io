/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'left-quote': '&#xe939;',
            'right-quote': '&#xe93a;',
            'shipping': '&#xe90e;',
            'cart': '&#xe919;',
            'phone': '&#xe953;',
            'less': '&#xe954;',
            'more': '&#xe955;',
            'paste': '&#xe956;',
            'copy': '&#xe951;',
            'save': '&#xe917;',
            'trash': '&#xe907;',
            'edit': '&#xe915;',
            'share': '&#xe91d;',
            'clap': '&#xe91e;',
            'like': '&#xe911;',
            'dislike': '&#xe908;',
            'click': '&#xe923;',
            'swipe-left': '&#xe926;',
            'swipe-right': '&#xe94d;',
            'coffee': '&#xe94e;',
            'comment': '&#xe94f;',
            'mail': '&#xe950;',
            'link': '&#xe906;',
            'lock': '&#xe909;',
            'love': '&#xe90a;',
            'tag': '&#xe90b;',
            'pencil': '&#xe90f;',
            'account': '&#xe912;',
            'time': '&#xe91f;',
            'location': '&#xe920;',
            'music': '&#xe921;',
            'image': '&#xe924;',
            'home': '&#xe914;',
            'attachment': '&#xe93c;',
            'side-menu': '&#xe905;',
            'menu': '&#xe902;',
            'close': '&#xe903;',
            'done': '&#xe92f;',
            'copyright': '&#xe92e;',
            'equalizer': '&#xe90c;',
            'cog': '&#xe90d;',
            'star': '&#xe910;',
            'eye': '&#xe913;',
            'search-bold': '&#xe900;',
            'search': '&#xe901;',
            'logout': '&#xe930;',
            'login': '&#xe931;',
            'stop2': '&#xe92d;',
            'pause2': '&#xe934;',
            'play2': '&#xe938;',
            'stop': '&#xe937;',
            'pause': '&#xe935;',
            'play': '&#xe92c;',
            'previous': '&#xe999;',
            'next': '&#xe952;',
            'up2': '&#xe928;',
            'down2': '&#xe929;',
            'down': '&#xe92a;',
            'up': '&#xe92b;',
            'right2': '&#xe91b;',
            'left2': '&#xe916;',
            'left': '&#xe91a;',
            'whatsapp': '&#xe933;',
            'dribbble': '&#xe94a;',
            'yahoo': '&#xe94b;',
            'android': '&#xe918;',
            'apple': '&#xe91c;',
            'blogger': '&#xe922;',
            'delicious': '&#xe925;',
            'facebook': '&#xe932;',
            'flickr': '&#xe93b;',
            'instagram': '&#xe93d;',
            'linkedin': '&#xe93e;',
            'email': '&#xe93f;',
            'pinterest': '&#xe940;',
            'reddit': '&#xe941;',
            'rss': '&#xe942;',
            'soundcloud': '&#xe943;',
            'tumblr': '&#xe944;',
            'twitter': '&#xe945;',
            'vimeo': '&#xe946;',
            'windows': '&#xe947;',
            'wordpress': '&#xe948;',
            'youtube': '&#xe949;',
            'gplus': '&#xe904;',
            'uninga': '&#xe936;',
            'uninga-outline': '&#xe94c;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/at-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
