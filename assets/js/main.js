let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");




// Assuming generateQRCode() function returns the image path
function generateQRCode() {
    if (qrText.value.length > 0) {
        var imagePath = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrImg.src = imagePath;
        imgBox.classList.add("show-img");
        return imagePath; // Return the image path
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
        return null; // Return null if no QR code generated
    }
}

// Function to update download link with generated image path
function updateDownloadLink(imagePath) {
    var downloadLink = document.getElementById("downloadLink");
    if (imagePath) {
        downloadLink.href = imagePath;
        downloadButton.removeAttribute("disabled"); // Enable the download button
    } else {
        downloadLink.removeAttribute("href"); // Remove the href if no QR code generated
        downloadButton.setAttribute("disabled", true); // Disable the download button
    }

}
// Usage example:
var generatedImagePath = generateQRCode();
updateDownloadLink(generatedImagePath);


function shareOnWhatsApp() {
     
    // Get the URL of the QR code image
    var qrCodeUrl = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;;
    
    // Encode the QR code URL
    var encodedUrl = encodeURIComponent(qrCodeUrl);
    
    // Construct the WhatsApp share URL
    var whatsappShareUrl = "https://wa.me/?text=" + encodedUrl;
    
    // Open the WhatsApp share URL in a new tab
    window.open(whatsappShareUrl, '_blank');
}