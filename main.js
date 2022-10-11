let pokemon = [
    {"Type 1":"grass", "Type 2":"poison", "Base ATK":118, "Base DEF":118, "Base STA":90},
    {"Type 1":"grass", "Type 2":"poison", "Base ATK":151, "Base DEF":151, "Base STA":120},
    {"Type 1":"grass", "Type 2":"poison", "Base ATK":198, "Base DEF":198, "Base STA":160},
    {"Type 1":"fire", "Type 2":"N/A", "Base ATK":116, "Base DEF":96, "Base STA":78},
    {"Type 1":"fire", "Type 2":"N/A", "Base ATK":158, "Base DEF":129, "Base STA":116},
    {"Type 1":"fire", "Type 2":"flying", "Base ATK":223, "Base DEF":176, "Base STA":156},
    {"Type 1":"water", "Type 2":"N/A", "Base ATK":94, "Base DEF":122, "Base STA":88},
    {"Type 1":"water", "Type 2":"N/A", "Base ATK":126, "Base DEF":155, "Base STA":118},
    {"Type 1":"water", "Type 2":"N/A", "Base ATK":171, "Base DEF":210, "Base STA":158},
    {"Type 1":"bug", "Type 2":"N/A", "Base ATK":55, "Base DEF":62, "Base STA":90},
    {"Type 1":"bug", "Type 2":"N/A", "Base ATK":45, "Base DEF":94, "Base STA":100},
    {"Type 1":"bug", "Type 2":"flying", "Base ATK":167, "Base DEF":151, "Base STA":120},
    {"Type 1":"bug", "Type 2":"poison", "Base ATK":63, "Base DEF":55, "Base STA":80},
    {"Type 1":"bug", "Type 2":"poison", "Base ATK":46, "Base DEF":86, "Base STA":90},
    {"Type 1":"bug", "Type 2":"poison", "Base ATK":169, "Base DEF":150, "Base STA":130},
    {"Type 1":"normal", "Type 2":"flying", "Base ATK":85, "Base DEF":76, "Base STA":80},
    {"Type 1":"normal", "Type 2":"flying", "Base ATK":117, "Base DEF":108, "Base STA":126},
    {"Type 1":"normal", "Type 2":"flying", "Base ATK":166, "Base DEF":157, "Base STA":166},
    {"Type 1":"normal", "Type 2":"N/A", "Base ATK":103, "Base DEF":70, "Base STA":60},
    {"Type 1":"normal", "Type 2":"N/A", "Base ATK":161, "Base DEF":144, "Base STA":110},
];

function displayStats(clickedID){
    var type1 = "Type 1: " + pokemon[clickedID-1]["Type 1"];
    var type2 = "Type 2: " + pokemon[clickedID-1]["Type 2"];
    var baseATK = "Base ATK: " + pokemon[clickedID-1]["Base ATK"];
    var baseDEF = "Base DEF: " + pokemon[clickedID-1]["Base DEF"];
    var baseSTA = "Base STA: " + pokemon[clickedID-1]["Base STA"];
    alert(type1 + "\r\n" + type2 + "\r\n" + baseATK + "\r\n" + baseDEF + "\r\n" + baseSTA);
}

function searchName(){
    var input, filter, ul, li, i, txtValue;
    var letters = /^[A-Za-z]+$/;
    input = document.getElementById('searchName');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName('li');

    if(input.value.match(letters) || input.value.length === 0){
        for (i = 0; i < li.length; i++) {
            h4 = li[i].getElementsByTagName("h4")[0];
            txtValue = h4.textContent || h4.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }else{
        alert("Enter letters between A-Z and a-z")
    }
}

function searchNumber(){
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('searchNumber');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName('li');

    if(input.value > 0 && input.value <21 || input.value.length === 0){
        for (i = 0; i < li.length; i++) {
            num = li[i].getElementsByClassName("number")[0];
            txtValue = num.textContent || num.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }else{
        alert("Enter a number between 1 and 20")
    }
}
