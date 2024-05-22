import os
import sys
import subprocess as sp

def main():
    for _, _, files in os.walk('.'):
        for file in files:
            # ffmpeg -i input_video.mp4 -c:v libx264 -crf 23 -preset medium output_video.mp4
            sp.run(['ffmpeg', '-i', file, '-c:v', 'libx264', '-crf', '0', '-preset', 'veryslow', 'h264_' + file])

if __name__ == '__main__':
    main()
