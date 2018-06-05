byId = document.getElementById;
select = document.querySelector;


function post(url, data, success){
    var data = JSON.stringify(data);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var dat = JSON.parse(xmlhttp.responseText);
            success(dat);
         }
     }
    xmlhttp.send(data);
}

function get(url, success){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var dat = JSON.parse(xmlhttp.responseText);
            success(dat);
         }
     }
    xmlhttp.send();
}
