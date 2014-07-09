// ==UserScript==
// @name       Kinokopilka expand all torrents
// @author     Alexey Shumkin
// @license    MIT
// @namespace  http://kinokopilka.tv
// @version    0.2.2
// @history    0.2.2 - Hide top banner
// @history    0.2.1 - Add @downloadURL
// @history    0.2 - Add Opera/Firefox support. Added metadata headers.
// @history    0.1 - initial version
// @description  Expands all folded torrents blocks and enables last "Enqueue torrent" link
// @include    http://www.kinokopilka.tv/*
// @match      http://www.kinokopilka.tv/*
// @grant      none
// @downloadURL https://github.com/ashumkin/kinokopilka.user.js/raw/master/kinokopilka.user.js
// @copyright  2012+, Alexey Shumkin
// ==/UserScript==
!function (win) {
	if (win.self != win.top) return;

    function expand_all_hidden() {
        var entries = this.document.getElementsByTagName("div");
        this.document.body.setAttribute('style', 'padding-top: 0px');
        var isMoviePage = this.document.URL.match(/\/movies\//);
        for (var i = 0; i < entries.length; i++ ) {
            // find post
            var entry = entries[i];
            // remove top <div> which is a banner
            if (i == 0) {
                entry.parentElement.removeChild(entry);
                // there is no reason to continue
                if (! isMoviePage) {
                    return;
                }
            }
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
