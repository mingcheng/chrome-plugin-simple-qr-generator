// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<lucky#gracecode.com>
 * @date   2013-11-15
 */

Zepto(function($) {
    chrome.tabs.getSelected(null, function(tab) {
        var url = "https://chart.googleapis.com/chart?cht=qr"+
                  "&chs=144x144&choe=UTF-8&chld=L|0&chl=" + tab.url + "";

        $("#qr").attr("src", url);
    });
});
