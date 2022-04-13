isOpened = false;
window.onload = main;

//////////////////// Sidebar ////////////////////
function swap(x) {
    x.classList.toggle("change");
    if (isOpened) {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("mainContainer").style.marginLeft = "0";
        isOpened = false;
    } else {
        document.getElementById("sidebar").style.width = "300px";
        document.getElementById("mainContainer").style.marginLeft = "300px";
        isOpened = true;
    }
}

//////////////////// Save user's checkbox selections ////////////////////
if (localStorage) {
    console.log("Local Storage IS supported");
} else {
    console.log("Local Storage is NOT supported");
}

// function fsawChange() {
//     item = localStorage.getItem("fsaw");
//     if (item == "true") {
//         localStorage.setItem("fsaw", "false");
//         document.getElementById("fsaw").checked = false;
//     } else {
//         localStorage.setItem("fsaw", "true");
//         document.getElementById("fsaw").checked = true;
//     }
// }

// function main() {
//     item = localStorage.getItem("fsaw");
//     if (item == "true") {
//         document.getElementById("fsaw").checked = true;
//     } else {
//         document.getElementById("fsaw").checked = false;
//     }
// }

function changeAll(name) {
    item = localStorage.getItem(name);
    console.log(`changeAll(${name}), item: ${item}`); // DEBUG
    elements = document.getElementsByName(name);
    console.log(`elements: ${elements}`); // DEBUG
    console.log(`elements.length: ${elements.length}`); // DEBUG
    if (item == "true") {
        localStorage.setItem(name, "false");
        for (var i = 0; i < elements.length; i++) {
            elements[i].checked = false;
        }
    } else {
        localStorage.setItem(name, "true");
        for (var i = 0; i < elements.length; i++) {
            elements[i].checked = true;
        }
    }
}

function main() {
    checkboxes = document.getElementsByClassName("checkbox");
    console.log(`main(): checkboxes: ${checkboxes}`); // DEBUG
    console.log(`checkboxes.length: ${checkboxes.length}`); // DEBUG
    for (var i = 0; i < checkboxes.length; i++) {
        checkbox = checkboxes[i].getAttribute("name");
        console.log(`checkbox: ${checkbox}`); // DEBUG
        item = localStorage.getItem(checkbox);
        console.log(`item: ${item}`); // DEBUG
        elements = document.getElementsByName(checkbox);
        console.log(`elements: ${elements}`); // DEBUG
        console.log(`elements.length: ${elements.length}`); // DEBUG
        if (item == "true") {
            for (var j = 0; j < elements.length; j++) {
                elements[j].checked = true;
            }
        } else {
            for (var j = 0; j < elements.length; j++) {
                elements[j].checked = false;
            }
        }
    }
}

//////////////////// Open track-specific tabs ////////////////////
function openTrack(event, trackName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(trackName).style.display = "block";
    event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
