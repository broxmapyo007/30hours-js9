console.log("this is the brain of our project");
showNotes();

// if a user add a note then add it to the local storage
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    };
    notesObj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = ""
    console.log(notesObj);

    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    };

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body" style="background-color:rgb(168, 203, 219)">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
</div>
    `;
    });
    let notesElm = document.getElementById("note");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
        notesElm.style.color="black"
        notesElm.style.textDecoration="none"
    }
    else{
        notesElm.innerHTML="Add new notes !!! "
        notesElm.style.color="yellow"
        notesElm.style.fontSize="1.2rem"
        notesElm.style.textDecoration="underline"
    }
};

function deleteNote(index){
    console.log("iam deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    };
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
let inputVal=search.value.toLowerClass;
let noteCard=document.getElementsByClassName("noteCard")
Array.from(noteCard).forEach(function(element){
    let cardTxt=element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
})
})