function submitData () {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    let gender
    let element_gender = document.querySelector('input[type=radio][name=gender]:checked')
        if (element_gender != null) {
            gender = element_gender.value;
        }
        else{
            gender = null;
        }
    if (name, email, phone, message === "" || gender === null){
        alert ("Semua form wajib diisi!")
        return false;
    }

    console.log (name, email, phone, subject,gender, message)

    let emailReceiver ="Kiki@gmail.com"
    let link = document.createElement ('a')
    link.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${message}`
    link.target = "_blank"
    link.click ()

    let objectData = {
        name: name,
        email: email,
        phone: phone, 
        subject: subject,
        message: message,
        gender: gender,
    }

    console.log (objectData)

}



