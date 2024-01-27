function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
}

setCookie("language","en",15);

// const temp = document.getElementById("temp")

// temp.innerHTML = getCookie("language")