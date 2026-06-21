function generateQR() {
  const text = document.getElementById("text").value;
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = ""; // clear old QR

  QRCode.toCanvas(text, { width: 200 }, function (err, canvas) {
    if (err) console.error(err);
    qrDiv.appendChild(canvas);
  });
}

// Download QR as PNG
document.getElementById("download").addEventListener("click", () => {
  const canvas = document.querySelector("#qrcode canvas");
  if (!canvas) return;
  const link = document.createElement("a");
  link.download = "qrcode.png";
  link.href = canvas.toDataURL();
  link.click();
});
