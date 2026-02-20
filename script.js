let generateQR = document.querySelector(".generate-QR")
let inputData = document.querySelector(".input-data")
let QRimage = document.querySelector(".QRimage")
function QRcode() {
    let text = inputData.value
    if(text ==""){
        alert("enter text or URl")
        return
    }
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ text;
    QRimage.src = url
}
generateQR.addEventListener("click",function(){
    QRcode()
})
