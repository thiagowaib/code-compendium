import qrcode # => QR Code generation library
import os # => Used for path solving
from random import random # => Used to generate a random number with random()

print("""\n
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
QR Code Generator with Python
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
""")

while(True):
    # Data String for the QR Code
    data = input(">> Insert QR code data: ")

    try:
        # Settings for the QR Code Generation
        qr = qrcode.QRCode(
            version = None, #Enables the {fit=True} parameter, which sets the QR Code size automatically
        )

        # Adds Data String to the QR Code
        qr.add_data(data)

        # Generates the QR Code with proper dimensions
        qr.make(fit = True)
        break
    except:
        print("x-x There was an error generating the QR code, please try again...\n")

try:
    # Uses the QR Code enconding to generate an image
    img = qr.make_image(
        fill_color = "black",
        back_color = "white"
    # type(img) -> qrcode.image.pil.PilImage
)
except:
    print("x-x There was an error converting QR data to Image")
    quit()

try:
    # Resolves the path and saves the QR Code as a .png
    file_name = input("   QR Code generated!\n>> Insert the file name for the download ")

    # In case of the file_name being an empty string
    if file_name == "":
        file_name = "qr-" + str(int((random() * 128)))
    
    # Sets the absolute file path for the qr-code (into the qr-codes/ folder)
    file_path = os.path.dirname(os.path.realpath(__file__)) + "\\" + "\\" + "qr-codes" + "\\" + "\\" + file_name + ".png"

    img.save(file_path) # -> Saves the image

    print("QR Code saved to "+file_path+" =)")
except:
    print("x-x There was an error downloading the image to "+file_path)
    quit()
