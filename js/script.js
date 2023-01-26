var search_bar = document.getElementById('search-bar');

document.onkeydown = function (e){
    if(e.keyCode === 13){
        var content = search_bar.value.replace(new RegExp(" ", "g"), "+");
        if(content !== ""){
            window.location = ("https://google.com/search?q=" + content);
        }
    }
}