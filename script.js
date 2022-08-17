var openElem = document.getElementById('projects');
const project_items = document.getElementsByClassName('project');
const links = document.getElementById("links");
const content = document.getElementById("content");
const mobile_break = 650; // make sure to change in style too
var menu_open = false;

function show(id) {
    openElem.style.display = "none"
    elem = document.getElementById(id);
    elem.style.display = "block";
    openElem = elem;
    if (menu_open) {
        create_menu();
    }
    window.scrollTo(0, 0);
}

function show_project(id) {
    for (let i = 0; i < project_items.length; i++) {
        project_items[i].style.display = "none";
    }
    show('projects');
    document.getElementById(id).style.display = "block";
}

function show_all_projects() {
    for (let i = 0; i < project_items.length; i++) {
        project_items[i].style.display = "block";
    }
}

function create_menu() {
    links.classList.toggle('active');
    content.classList.toggle('active');

    const tBar = document.getElementsByClassName('top-bar')[0];
    const bBar = document.getElementsByClassName('bottom-bar')[0];
    tBar.classList.toggle('active');
    bBar.classList.toggle('active');
    
    menu_open = !menu_open;
}

const randTime = 6;
function glitchText(txt, j) {  
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*"
    res = ""
    for (let i = 0; i < (Math.min(j, txt.length)); i++) {
        if ((i < (j - randTime)) || txt[i] == " ") {
            res += txt[i]
        } else {
            rand = chars[Math.floor(Math.random() * chars.length)];
            res += rand
        }
    }
    return res;
}

const bc="bishop crowley";
const title = document.getElementById('title');
const mobile_title = document.getElementById('mobile-title');
function displayName() {
    if(navigator.userAgent.match(/chrome|chromium|crios/i)){ //only supported for chrome
        id = setInterval(lyricHelper, 70)
        var j = 0
        var txt = "&nbsp;"
        function lyricHelper() {
            j += 1;  
            txt = glitchText(bc, j);
            title.innerHTML = txt;
            mobile_title.innerHTML = txt;
            if (j > bc.length + randTime) {
                clearInterval(id);
            }
        }
    } else { // if not chrome just display 'bishop crowley'
        title.innerHTML = bc;
        mobile_title.innerHTML = bc;
    } 
}
displayName();

function desktop_only() {
    var videos = document.getElementsByTagName("video");
    const aboutVideo = document.getElementById("about-video");
    if (window.innerWidth > mobile_break) {
        for (let i = 0; i < videos.length; i++) {
            videos[i].preload = "auto";
            videos[i].muted = true;
            videos[i].autoplay = true;
        }
        aboutVideo.style.display = "block";
    }
}   
desktop_only();


function restart_video(id) {
    var vid = document.getElementById(id);
    vid.currentTime = 0;
}

