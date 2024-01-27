import eel

eel.init('web')

config = []

@eel.expose
def colorMode(mode):
    print(mode)

@eel.expose
def avatar(avatar):
    print(avatar)
    


eel.start('index.html', size=(960, 580), mode='chrome')  # Set the window size using the 'size' argument
eel.run()