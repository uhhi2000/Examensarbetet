
$(window).bind("load", function() {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
        var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
        if (ieversion>=8)
        document.write("You're using IE8 or above")
        else if (ieversion>=7)
        document.write("You're using IE7.x")
        else if (ieversion>=6)
        document.write("You're using IE6.x")
        else if (ieversion>=5)
        document.write("You're using IE5.x")
    }
    else
        document.write("n/a")

});
    
$( document ).ready(function() {
    
    $('iframe').attr('src', $('iframe').attr('src'));

});