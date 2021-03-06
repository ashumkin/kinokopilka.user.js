// ==UserScript==
// @name       Kinokopilka expand all torrents
// @author     Alexey Shumkin
// @license    MIT
// @namespace  http://kinokopilka.tv
// @namespace  https://kinokopilka.pro
// @version    0.2.2
// @history    0.2.2 - Add kinokopilka.pro domain (https)
// @history    0.2.1 - Add @downloadURL
// @history    0.2 - Add Opera/Firefox support. Added metadata headers.
// @history    0.1 - initial version
// @description  Expands all folded torrents blocks and enables last "Enqueue torrent" link
// @include    http://www.kinokopilka.tv/movies/*
// @include    https://www.kinokopilka.pro/movies/*
// @match      http://www.kinokopilka.tv/movies/*
// @match      https://www.kinokopilka.pro/movies/*
// @grant      none
// @downloadURL https://github.com/ashumkin/kinokopilka.user.js/raw/master/kinokopilka.user.js
// @copyright  2012+, Alexey Shumkin
// ==/UserScript==
!function (win) {
	if (win.self != win.top) return;

    function expand_all_hidden() {
        var entries = this.document.getElementsByTagName("div");
        for (var i = 0; i < entries.length; i++ ) {
            // find post
            var entry = entries[i];
            if ((entry.getAttribute('class') == 'torrent-info' )
                 || (entry.getAttribute('class') == 'media')
                || entry.id.match(/xbt_file_[0-9]+_bookmark_widget/))
            {
                entry.setAttribute('style', 'display: block');
            }
        }
    }
	win.addEventListener("load", function() {
        expand_all_hidden();
	}, false);

}(typeof unsafeWindow == 'undefined' ? window : unsafeWindow)
