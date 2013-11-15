// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<lucky#gracecode.com>
 * @date   2013-11-15
 */

Zepto(function($) {
    chrome.tabs.getSelected(null, function(tab) {
        var url = "https://chart.googleapis.com/chart?cht=qr"+
                  "&chs=200x200&choe=UTF-8&chld=Q|0&chl=" + tab.url + "";

        if (tab.favIconUrl) {
            $("#fav").attr("src", tab.favIconUrl).show();
        }

        $("#fav, #qr").bind("error", function(e) {
            $(e.target).hide();
        });

        $("#qr").attr("src", url);
    });
});
