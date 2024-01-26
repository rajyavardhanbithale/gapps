

const apps = ["google","youtube","music","bard", "gmail", "drive", "maps", "meet", "docs", "sheets", "slides", "photos", "calendar", "classroom", "translate"];
const titleElement = document.getElementById('titleElement');

const elements = apps.map(item => {
    const container = document.createElement('div'); // Create a container for each app
    container.classList.add('flex', 'flex-col', 'p-4' ,'hover:bg-slate-800', 'transition', 'duration-700','ease-in-out', 'rounded-2xl');
    
    const image = document.createElement('img');
    if (item === "calendar" && isInternetAvailable()){
        const today = new Date();
        const day = today.getDate();

        image.src = `https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${day}_2x.png`;
    }else{
        image.src = `./img/${item}.svg`;
    }
    image.classList.add('w-24', 'mx-auto','h-24','object-container');

    const title = document.createElement('span');
    title.textContent = item;
    title.classList.add('mx-auto', 'font-semibold', 'capitalize', 'mt-2');

    container.appendChild(image);
    container.appendChild(title);

    // Adding broadcast
    container.addEventListener('click',function(){
        broadcast(item)
    })

    return container;
});

elements.forEach(elem => {
    titleElement.appendChild(elem);
});

function broadcast(channel) {
    // Sending the application name to server side 
    eel.broadcast(channel);
}


function isInternetAvailable() {
    return navigator.onLine;
}

document.onkeydown = function (e) {
    return false;
}