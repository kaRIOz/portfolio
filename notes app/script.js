const add = document.getElementById("add");
const popup_box = document.querySelector(".popup-box");
const popup_title = document.querySelector(".popup-header p");
const closeIcon = document.querySelector(".popup-header i");
const addNoteBtn = document.querySelector(".content button");
const popupTag = document.querySelector("input");
const desTag = document.querySelector("textarea");
const section_center = document.querySelector(".section-center");
const editBtn = document.querySelector("button");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let isupdate = false,
  updateId;
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
add.addEventListener("click", () => {
  popupTag.focus();
  popup_box.classList.add("show");
});

function displayNotes() {
  document
    .querySelectorAll(".single-item")
    .forEach((single_item) => single_item.remove());
  notes.forEach((note, idx) => {
    let articleEL = `<article class="single-item">
                          <div class="header">
                              <div class="single-title">
                                  <h3>${note.title}</h3>
                                  <button class="close-btn" id="close-btn">
                                      <i class="fas fa-times" onclick="deleteItem(${idx})"></i>
                                  </button>
                              </div>
                              <p class="text">${note.description}</p>
                          </div>
                          <div class="bottom-content">
                              <span>${note.date}</span>
                              <div class="setting">
                      
                                  <i class="fas fa-edit" onclick="showMenu(this)"></i>
                                  <div class="menu">
                                      <i class="fas fa-pencil-alt"onclick="editNote(${idx} , '${note.title}' , '${note.description}')" ></i>
                                  </div>
                              </div>
                          </div>
                      </article>`;

    section_center.insertAdjacentHTML("beforeend", articleEL);
  });
}
displayNotes();

function showMenu(element) {
  element.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != element) {
      element.parentElement.classList.remove("show");
    }
  });
}

function deleteItem(idx) {
  let confirmDel = confirm("Are you sure ?");
  if (!confirmDel) return;
  notes.splice(idx, 1); //removing selected note from array / tasks
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function editNote(idx, title, description) {
  add.click();
  isupdate = true;
  updateId = idx;
  console.log(updateId);
  editBtn.innerText = "edit note";
  popup_title.innerText = "you are editing";
  popupTag.value = title;
  desTag.value = description;
}

closeIcon.addEventListener("click", () => {
  isupdate = false;
  popupTag.value = "";
  desTag.value = "";
  popup_box.classList.remove("show");
  editBtn.innerText = "Add a new Note";
  popup_title.innerText = "Add Note";
});

addNoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let noteTag = popupTag.value;
  let noteDes = desTag.value;

  if (noteTag || noteDes) {
    let date = new Date();
    let day = date.getDay();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let noteInfo = {
      title: noteTag,
      description: noteDes,
      date: `${month} , ${day} , ${year}`,
    };
    if (!isupdate) {
      notes.push(noteInfo);
    } else {
      isupdate = false;
      notes[updateId] = noteInfo;
    }

    localStorage.setItem("notes", JSON.stringify(notes));
    closeIcon.click();
    displayNotes();
  }
});
