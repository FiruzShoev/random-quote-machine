$(document).ready(function() {  
    var colorsHex = ["#e5b3da", "#c6e2ff", "#ffe4e1", "#ffb6c1", "#ffc3a0", "#b0e0e6", "#66cccc",  
                   "#edf0f5", "#a0db8e", "#b6fcd5", "#66cccc", "#c6e2ff", "#66cdaa", "#edfe19",
                   "#40e0d0", "#b0e0e6", "#ffc3a0", "#ffb6c1", "#ffe4e1", "#99ffff", "#b6fcd5",
                   "#8be9fd", "#ffd700", "#ffec6c", "#ffdf9c", "#fefd64", "#f2eb09", "#ecd681"];

    changeColor();
    fetchQuote();

    $("#new-quote").on("click", function(){
        changeColor();
        fetchQuote();
    });

    function fetchQuote() {
        $.ajax( {
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
            dataType: "jsonp",
            jsonpCallback: "mycallback",
            success: function(data) {
                var post = data.shift(); // The data is an array of posts. Grab the first one.      
                $("#text").html(post.content);
                $("#author").html(post.title);
                $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=\"" + $("#text").text() + "\"" + " - " + $("#author").text());
            }
        });
    }
    
    function changeColor() {
        var randColor = Math.floor(Math.random()*colorsHex.length);
        $("body").css("background-color", colorsHex[randColor]);
    }
});

