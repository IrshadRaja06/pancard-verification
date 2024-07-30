function validPan() {
    let pan = document.getElementById("pan").value;
    let regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    let ansElement = document.getElementById("ans");
    
    if (regex.test(pan)) {
        ansElement.innerHTML = "PAN Valid";
        ansElement.style.color = "green";
        return true;
    } else {
        ansElement.innerHTML = "Invalid PAN Number";
        ansElement.style.color = "red";
        return false;
    }
}