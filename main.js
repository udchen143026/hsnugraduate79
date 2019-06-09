var menu_no = 1;
var submenu_no = 1;
function change_menu(n) {
    var menu_dir = "";
    if (n < 10) {
        menu_dir += "0";
    }
    menu_dir += n.toString();
    menu_dir += "/01/index.html";
    document.getElementById("subpage").src = menu_dir;
    if (n === 3 || n === 6 || n === 7) {
        document.getElementById("submenu").innerHTML = "<a href = \"#\" class = \"suboption\" id = \"submenu01\" onclick = \"change_submenu(1)\">大門組</a><a href = \"#\" class = \"suboption\" id = \"submenu02\" onclick = \"change_submenu(2)\">走道A組</a><a href = \"#\" class = \"suboption\" id = \"submenu03\" onclick = \"change_submenu(3)\">走道B組</a><a href = \"#\" class = \"suboption\" id = \"submenu04\" onclick = \"change_submenu(4)\">走道C組</a><a href = \"#\" class = \"suboption\" id = \"submenu05\" onclick = \"change_submenu(5)\">舞台組</a>";
        document.getElementById("submenu01").style.color = "#679ef7";
        submenu_no = 1;
    } else if (n === 11) {
        document.getElementById("submenu").innerHTML = "<a href = \"#\" class = \"suboption\" id = \"submenu01\" onclick = \"change_submenu(1)\">行政分組</a><a href = \"#\" class = \"suboption\" id = \"submenu02\" onclick = \"change_submenu(2)\">美工分組</a><a href = \"#\" class = \"suboption\" id = \"submenu03\" onclick = \"change_submenu(3)\">畢典當日</a>";
        document.getElementById("submenu01").style.color = "#679ef7";
        submenu_no = 1;
    } else if (n === 10) {
        document.getElementById("submenu").innerHTML = "<a href = \"#\" class = \"suboption\" id = \"submenu01\" onclick = \"change_submenu(1)\">開工拜拜</a><a href = \"#\" class = \"suboption\" id = \"submenu02\" onclick = \"change_submenu(2)\">團圓夜</a><a href = \"#\" class = \"suboption\" id = \"submenu03\" onclick = \"change_submenu(3)\">推甄盃</a><a href = \"#\" class = \"suboption\" id = \"submenu04\" onclick = \"change_submenu(4)\">大出遊</a>";
        document.getElementById("submenu01").style.color = "#679ef7";
        submenu_no = 1;
    } else {
        document.getElementById("submenu").innerHTML = "";
    }
    menu_dir = "";
    if (menu_no < 10) {
        menu_dir += "0";
    }
    menu_dir += menu_no.toString();
    document.getElementById("menu" + menu_dir).style.color = "lightblue";
    menu_no = n;
    menu_dir = "";
    if (menu_no < 10) {
        menu_dir += "0";
    }
    menu_dir += menu_no.toString();
    document.getElementById("menu" + menu_dir).style.color = "#679ef7";
    if (n == 1) {
        document.getElementById("content").style.top = "150px";
        document.getElementById("content").style.paddingTop = "0px";
        setTimeout(function(){
            document.getElementById("title").style.display = "initial";
        }, 1000);
    } else {
        document.getElementById("content").style.top = "0px";
        document.getElementById("content").style.paddingTop = "100px";
        document.getElementById("title").style.display = "none";
    }
}

function change_submenu(n) {
    document.getElementById("submenu0" + submenu_no.toString()).style.color = "lightblue";
    var str = document.getElementById("subpage").src;
    str = str.substr(0, str.length - 12) + n.toString() + str.substr(str.length - 11);
    console.log(str);
    document.getElementById("subpage").src = str;
    submenu_no = n;
    document.getElementById("submenu0" + submenu_no.toString()).style.color = "#679ef7";
}
