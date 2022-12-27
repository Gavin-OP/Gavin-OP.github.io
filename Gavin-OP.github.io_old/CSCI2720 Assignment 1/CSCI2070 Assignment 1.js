function tab() {
    let tab =  document.getElementById('tabs');
    if (tab.style.display == "none") 
    {
        tab.style.display = "";
    }
    else
    {
        tab.style.display = "none";
    }
}



function task1(){
    let h2= document.getElementsByTagName("h2");
    if (h2[0].classList == "text-start"){
        for(i = 0; i < h2.length; i++) {
            h2[i].classList = "text-center";
         }
    }

    else if (h2[0].classList == "text-center"){
        for(i = 0; i < h2.length; i++) {
            h2[i].classList = "text-end";
         }
    }

    else if (h2[0].classList == "text-end"){
        for(i = 0; i < h2.length; i++) {
            h2[i].classList = "text-start";
         }
    }
}



function task2(){
    let newskill = prompt("Please enter a new skill set:");
    let proficiency = prompt("Please enter your proficiency:");
    let skill = document.getElementById("skill sets table")

    if (newskill == "" || proficiency == "" ) {
        return false;
    }
    else {
        let insertTr = skill.insertRow(-1);
        let insertTd = insertTr.insertCell(0);
        insertTd.innerHTML = newskill;
        let insertTd1 = insertTr.insertCell(-1);
        insertTd1.innerHTML = proficiency;
    }
}



function task3(){
    let progress =  document.getElementById('progress bar');
    if (progress.style.display == "none") 
    {
        progress.style.display = "";
        myInterval = setInterval(updateProgress, 30);
    }
    else
    {
        progress.style.display = "none";
        clearInterval(myInterval);
    }
}



function updateProgress(){
    let percentage = (window.scrollY/(document.body.clientHeight-window.innerHeight))*100;
    let progress =  document.getElementById('progress bar');
    percentage = percentage.toFixed(2)+"%";
    progress.style.width = percentage;
}



function processform(){
    let newComment = document.createElement("div");
    let lastComment = document.querySelector("#commentsDisplay").lastElementChild;
    let newEmail = document.querySelector("#new-email").value;
    let comment = document.querySelector("#new-comment").value;
    let color = document.querySelectorAll("input[name=new-color]:checked")[0];

    if ( newEmail == "" || comment == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail))){
        return;
    }
    else {
        newComment.innerHTML = '<div><svg height="80" width="80"><circle cx="30" cy="30" r="20"></svg></div><div><h5></h5><p></p></div>';
        newComment.className = "d-flex";
        newComment.querySelectorAll("div")[0].className = "flex-shrink-0";
        newComment.querySelectorAll("div")[1].className = "flex-grow-1"; 
        newComment.id = 'c' + (Number(lastComment.lastElementChild.id.substr(1)) + 1);
        newComment.querySelector("h5").innerHTML = newEmail;
        newComment.querySelector("p").innerHTML = comment;
        if (color==null){
            newComment.querySelector("circle").setAttribute("fill", "white");
        }
        else {
            newComment.querySelector("circle").setAttribute("fill", color.value);
        }

        lastComment.appendChild(newComment);

        document.querySelector("form").reset();
        saveComment();
    }
}



function saveComment() {
    fetch('CSCI 2720 Assignment 1 comments.txt', {method: 'PUT', body: document.querySelector("#commentsDisplay").innerHTML});
};


function loadComment(){
    fetch('CSCI 2720 Assignment 1 comments.txt')
    .then(res => res.text())
    .then(txt => document.querySelector("#commentsDisplay").innerHTML = txt);
}


window.onload = loadComment();