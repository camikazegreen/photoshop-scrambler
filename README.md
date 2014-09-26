## Description

This repo includes a basic Photoshop CC 2014 Plugin that will "scramble" an image, and a javascript file to "unscramble" the image in your browser.

This will allow you to serve a scrambled image to the browser, and have it appear perfectly when displayed.

## Generator Plugin - Scrambler

This plugin is built directly off of two tutorials offered directly by Adobe, and then adding in about 8 lines of my own code.

Getting a Generator Plugin up and running by Lee Brimelow:
http://www.leebrimelow.com/introduction-to-photoshop-generator/

Getting a Bitmap out of a Generator Plugin by Tom Krcha:
http://tomkrcha.com/?p=3963

### Getting Started

#### Setting up the Plugin in Photoshop

1. Make sure that you are using Adobe Photoshop CC 2014 and you have Node installed.
2. In Photoshop, go to Photoshop > Preferences > Plug-Ins...
3. Set Service Name to "Photoshop Server" and Password to "password".
4. Clone the Git Repo.
5. Navigate to the generator-plugins directory in your terminal.
6. Type node app -f test/plugins
7. Open an image in Photoshop, and go to File > Generate > Scrambler
8. This will create a new output image called out.png in your generator-plugins/test/plugins/scrambler directory.

#### Using the JavaScript to unscramble in the browser

1. Set up your web server to point to the generator-plugins/scrambler directory. (I'm not sure why, but the canvas transformation won't work if you just open the index.html file in your browser.)
2. Copy the out.png file from the generator-plugins/test/plugins/scrambler directory to generator-plugins/scrambler.
3. In your browser, go to the alias that you set up in your web server and click on the image to unscramble it.

### License

(MIT License)

Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
