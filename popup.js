// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<lucky#gracecode.com>
 * @date   2013-11-15
 */

Zepto(function($) {
    var QRCodeBox = new QRCode(document.getElementById("qr"), {
        width : 200,
        height : 200
    });


    chrome.tabs.getSelected(null, function(tab) {
        //var url = "http://c.wotula.com/chart.php?size=32&level=H&val=" + encodeURIComponent(tab.url);
        if (tab.favIconUrl) {
            $("#fav").attr("src", tab.favIconUrl).show();
        } 

        $("#fav, #qr").bind("error", function(e) {
            $(e.target).hide();
        });

        QRCodeBox.makeCode(tab.url);
        //$("#qr").attr("src", url);
    });
});
