#!/usr/bin/env lsc
{ URL, ImageTarget, DesktopScreenRegion, ScreenPainter, DesktopMouse } = require \./main.js

s = new DesktopScreenRegion

imageURL = new URL "http://code.google.com/images/code_logo.gif"
imageTarget = new ImageTarget imageURL

r = s.wait imageTarget 5000
p = new ScreenPainter

p.label r, "Hello World", 300

mouse = new DesktopMouse
mouse.click r.getCenter!

setInterval (->), 1000
