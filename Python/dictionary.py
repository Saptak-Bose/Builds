from turtle import *
import colorsys

bgcolor("black")
speed(0)
pensize(2)

hue = 0.0

for i in range(300):
    c = colorsys.hsv_to_rgb(hue, 1, 0.8)
    pencolor(c)
    hue += 0.005
    right(i)
    circle(50, i)
    forward(i)
    left(91)
    
done()