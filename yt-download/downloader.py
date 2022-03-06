from pytube import YouTube

print("""\n
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
YouTube Downloader with Python
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
\n""")
while(True):
    url = input(">> Insert the video URL: ")

    # YouTube() returns a Youtube object
    try:
        yt = YouTube(url)
        title = yt.title
        break;
    except:
        print("x-x There was an error processing your URL, please try again...\n")

# --------------
# Video Download
# ______________
inp = ""
while(inp.upper() != "Y" and inp.upper() != "N"):
    inp = input("Wish to download Video? (Y/n)")
if(inp.upper() == "Y"):
    try:
        # Returns the video+audio Streams with resolution < 720p
        videoStreams = yt.streams.filter(progressive = True, file_extension = "mp4")

        # We can filter video streams to get a specified resolution
        # Via the itag: 22 = 720p, 18 = 360p
        videoResTag = 22 
        if(not videoStreams.get_by_itag(videoResTag)):
            videoResTag = 18
        videoExtension = ".mp4"

        video = videoStreams.get_by_itag(videoResTag)
        video.download(
            output_path = "./pytube-downloads", #defaults to current directory
            filename = title + videoExtension, #downloaded file name
        )
        print("Video downloaded successfully!")
    except:
        print("There was an error downloading your video\n")

# --------------
# Audio Download
# ______________
inp = ""
while(inp.upper() != "Y" and inp.upper() != "N"):
    inp = input("Wish to download Audio? (Y/n)")
if(inp.upper() == "Y"):
    try:
        # Returns only the Audio Streams
        audioStreams = yt.streams.filter(only_audio = True)

        # We can filter audio streams to get a specified quality
        # Via the itag: 139 = 48kbps, 140 = 128kbps
        audioQualityTag = 140
        if(not audioStreams.get_by_itag(audioQualityTag)):
                audioQualityTag = 139
        audioExtension = ".mp3"

        audio = audioStreams.get_by_itag(audioQualityTag)
        audio.download(
            output_path = "./pytube-downloads", #defaults to current directory
            filename = title + audioExtension, #downloaded file name
        )
        print("Audio downloaded successfully!")
    except:
        print("x-x There was an error downloading your audio\n")