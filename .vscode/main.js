function searchName(){
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('searchName');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        h4 = li[i].getElementsByTagName("h4")[0];
        txtValue = h4.textContent || h4.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function searchNumber(){
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('searchNumber');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        num = li[i].getElementsByClassName("number")[0];
        txtValue = num.textContent || num.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
