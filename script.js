function saveNote() {
    let note = document.getElementById("note").value;
    localStorage.setItem("userNote", note);
    document.getElementById("saved-note").innerText = "Saved: " + note;
}

// Load saved note on page refresh
document.getElementById("note").value = localStorage.getItem("userNote") || "";
