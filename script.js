function startMedia() {
  const video = document.getElementById("video");
  const status = document.getElementById("status");

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        video.srcObject = stream;
        status.textContent = "Streaming started...";
      })
      .catch((err) => {
        status.textContent = `Error: ${err.message}`;
      });
  } else {
    status.textContent = "Your browser does not support media devices.";
  }
}
