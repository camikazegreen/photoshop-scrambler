document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('channelconvert');
    var context = canvas.getContext('2d');

    var image = new Image();
    image.onload = function() {
        // Draw this image with offset 0x0
        context.drawImage(this, 0, 0);

    }
    image.src = 'test.png';
    imgW = image.width;
    imgH = image.height;

    canvas.setAttribute("width", imgW);
    canvas.setAttribute("height", imgH);

    //var width = img.clientWidth;
    //var height = img.clientHeight;

    function invert() {
        imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        pixels = imageData.data;

        // Loop through set of fours due to four color channels: red, green, blue, alpha
        for (var i = 0; i < pixels.length; i += 4) {
            // Ensure that all color channels are fully white
            // 62 98 94
            newR = -137;
            newG = -226;
            newB = -89;
            withNewR = pixels[i]+newR; if( withNewR<0){withNewR=withNewR+256};
            withNewG = pixels[i+1]+newG; if(withNewG<0){withNewG=withNewG+256};
            withNewB = pixels[i+2]+newB; if(withNewB<0){withNewB=withNewB+256};
            // if(pixels[i]==62){
            //     console.log("originalR: "+pixels[i])
            //     console.log("originalG: "+pixels[i+1])
            //     console.log("originalB: "+pixels[i+2])
            // }
            pixels[i] = withNewR;
            pixels[i + 1] = withNewG;
            pixels[i + 2] = withNewB;
            // if(pixels[i]==62){
            //     console.log("newR: "+withNewR);
            //     console.log("newG: "+withNewG);
            //     console.log("newB: "+withNewB);
            // }
            ///pixels[i + 3] = 255 - pixels[i + 3];  // Alpha channel
        }

        imageData.data = pixels;

        context.putImageData(imageData, 0, 0);
    }
    canvas.addEventListener('click', invert, false);


});
