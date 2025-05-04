function saveNote() {
    let note = document.getElementById("note").value;
    localStorage.setItem("userNote", note);
    document.getElementById("saved-note").innerText = "Saved: " + note;
}

// Show saved note when the page loads
document.getElementById("saved-note").innerText = "Saved: " + (localStorage.getItem("userNote") || "No notes saved yet.");
