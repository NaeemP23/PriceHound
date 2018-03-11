
function clickMe()
{
    alert("Success-- Information Changed.");
};

function buttons(evt, bttnName)
{
    var i, button_content, button_info;
    button_content = document.getElementsByClassName("button_content");
    for (i = 0; i < button_content.length; i++) {
        button_content[i].style.display = "none";
    }
    button_info = document.getElementsByClassName("button_info");
    for (i = 0; i < button_info.length; i++) {
        button_info[i].className = button_info[i].className.replace(" active", "");
    }
    document.getElementById(bttnName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
