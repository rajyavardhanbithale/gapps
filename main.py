import eel
import subprocess
from screeninfo import get_monitors


eel.init('web')

@eel.expose
def broadcast(channel):
    # Receiving information from client side
    createInstance(channel)


def createInstance(application):
    # checking the application and setting the URLs
    match application:
        case "google":
            url = "https://google.com/"
        case "youtube":
            url = "https://youtube.com/"
        case "gmail":
            url = "https://gmail.com/"
        case "drive":
            url = "https://drive.google.com/"
        case "maps":
            url = "https://maps.google.com/"
        case "meet":
            url = "https://meet.google.com/"
        case "photos":
            url = "https://photos.google.com/"
        case "calendar":
            url = "https://calendar.google.com/"
        case "music":
            url = "https://music.youtube.com/"
        case "classroom":
            url = "https://classroom.google.com/"
        case "transtale":
            url = "https://translate.google.com/"
        case "bard":
            url = "https://bard.google.com/"
        case "docs":
            url = "https://docs.google.com/document/"
        case "sheets":
            url = "https://docs.google.com/spreadsheets/"
        case "slides":
            url = "https://docs.google.com/presentation/"


    payload = [
        'google-chrome',
        f'--app={url}',
        '--chrome-frame',
        '--window-size=1500,1000',
        '--window-position=0,0'
    ]

    # Executing the payload
    subprocess.Popen(payload)
     
def get_screen_resolution():
    # Extracting the resolution of monitor
    monitors = get_monitors()
    primary_monitor = monitors[0]
    screen_width = primary_monitor.width
    screen_height = primary_monitor.height
    return screen_width, screen_height


screen_width, screen_height = get_screen_resolution()
        
        
window_width = 1120
window_height = 768

# Placing the UI in the center of screen
x_position = (screen_width - window_width) // 2
y_position = (screen_height - window_height) // 2


eel.start('ui/launcher.html',size=(window_width, window_height), position=(x_position, y_position))
eel.close_callback(lambda: print('Exiting...'))
eel.run()


