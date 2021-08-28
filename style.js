

//color-swtchier
    var colorSwitch = document.querySelector(".colorSwitcher");
    var txtColor = document.querySelector(".para");
function gray() {
    colorSwitch.style.backgroundColor = "#535c68";
    document.querySelector(".para").innerHTML="Gray color";
    txtColor.style.color = "#fff"
};
function green() {
    colorSwitch.style.backgroundColor = "#4cd137";
    document.querySelector(".para").innerHTML="Green color";
    txtColor.style.color = "#fff"
};
function blue() {
    colorSwitch.style.backgroundColor = "#4834d4";
    document.querySelector(".para").innerHTML="Blue color";
    txtColor.style.color = "#fff"
};
function yellow() {
    colorSwitch.style.backgroundColor = "#f9ca24";
    document.querySelector(".para").innerHTML="Yellow color";
    txtColor.style.color = "#fff"
};