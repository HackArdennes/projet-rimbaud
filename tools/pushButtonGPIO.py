#!/usr/bin/env python2.7

import RPi.GPIO as GPIO
import subprocess
import traceback
 
GPIO.setmode(GPIO.BCM) # use GPIO numbering
GPIO.setwarnings(True)

pinIn = 17    # GPIO button interrupt to shutdown procedure
 
GPIO.setup(pinIn, GPIO.IN, pull_up_down=GPIO.PUD_UP)


def pushedButton():
    """Perform xdotool space key pushed down"""
    print("todo keyDOWN space")
    subprocess.call(['xdotool keydown space'], shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            
def releasedButton():
    """Perform xdotool space key pushed down"""
    print("todo keyUP space")
    subprocess.call(['xdotool keyup space'], shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    
def main():
    #GPIO.add_event_detect(INT, GPIO.BOTH, callback=pushedButton, bouncetime=100) 
    
    while True:
        if (GPIO.input(pinIn)==False):
            pushedButton();
            while (GPIO.input(pinIn)==False):
                pass
            releasedButton();
        
if __name__ == '__main__':
    try:
        main()
    except Exception:
        print(traceback.format_exc())
        GPIO.remove_event_detect(pinIn)
