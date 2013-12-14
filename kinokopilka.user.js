// ==UserScript==
// @name       Kinokopilka expand all torrents
// @namespace  http://kinokopilka.tv
// @version    0.1
// @description  Expands all folded torrents blocks and enables last "Enqueue torrent" link
// @match      http://www.kinokopilka.tv/movies/*
// @copyright  2012+, Alexey Shumkin
// ==/UserScript==
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
expand_all_hidden();
