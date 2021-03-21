(function () {
    "use strict";
}());

var iCurrentSpeed = 0,
    iTargetSpeed = 0,
    bDecrement = null,
    job = null,
    iCurrentSpeed1 = 0,
    iTargetSpeed1 = 0,
    bDecrement1 = null,
    job1 = null
    iCurrentSpeed2 = 0,
    iTargetSpeed2 = 0,
    bDecrement2 = null,
    job2 = null,
    iCurrentSpeed3 = 0,
    iTargetSpeed3 = 0,
    bDecrement3 = null,
    job3 = null;

function degToRad(angle) {
    return ((angle * Math.PI) / 220);
}

function radToDeg(angle) {
    return ((angle * 220) / Math.PI);
}

function drawLine(options, line) {
    options.ctx.beginPath();

    options.ctx.globalAlpha = line.alpha;
    options.ctx.lineWidth = line.lineWidth;
    options.ctx.fillStyle = line.fillStyle;
    options.ctx.strokeStyle = line.fillStyle;
    options.ctx.moveTo(line.from.X,
        line.from.Y);

    options.ctx.lineTo(
        line.to.X,
        line.to.Y
    );

    options.ctx.stroke();
}

function createLine(fromX, fromY, toX, toY, fillStyle, lineWidth, alpha) {
    return {
        from: {
            X: fromX,
            Y: fromY
        },
        to: {
            X: toX,
            Y: toY
        },
        fillStyle: fillStyle,
        lineWidth: lineWidth,
        alpha: alpha
    };
}

function drawOuterMetallicArc(options) {
    /* Draw the metallic border of the speedometer
     * Outer grey area
     */
    /*    options.ctx.beginPath();

        // Nice shade of grey
        options.ctx.fillStyle = "rgb(127,127,127)";

        // Draw the outer circle
        options.ctx.arc(options.center.X,
            options.center.Y,
            options.radius,
            0,
            Math.PI,
            true);

        // Fill the last object
        options.ctx.fill();
    */
}

function drawInnerMetallicArc(options) {
    /* Draw the metallic border of the speedometer
     * Inner white area
     */

    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    /*options.ctx.beginPath();

    // White
    options.ctx.fillStyle = "rgb(255,255,255)";

    // Outer circle (subtle edge in the grey)
    options.ctx.arc(options.center.X,
                    options.center.Y,
                    (options.radius / 100) * 90,
                    0,
                    Math.PI,
                    true);

    options.ctx.fill();
    
    */
}

function drawMetallicArc(options) {
    drawOuterMetallicArc(options);
    drawInnerMetallicArc(options);
}

function drawBackground(options) {
    var i = 0;

    options.ctx.globalAlpha = 0.2;
    options.ctx.fillStyle = "rgb(0,0,0)";

    // Draw semi-transparent circles
    for (i = 170; i < 200; i++) {
        options.ctx.beginPath();

        options.ctx.arc(options.center.X,
            options.center.Y,
            i,
            0,
            Math.PI,
            true);

        options.ctx.fill();
    }

}

function applyDefaultContextSettings(options) {
    options.ctx.lineWidth = 2;
    options.ctx.globalAlpha = 1;
    options.ctx.strokeStyle = "rgb(255, 255, 255)";
    options.ctx.fillStyle = 'rgb(255,255,255)';
}

function drawSmallTickMarks(options) {
    var tickvalue = options.levelRadius - 8,
        iTick = 0,
        gaugeOptions = options.gaugeOptions,
        iTickRad = 0,
        onArchX,
        onArchY,
        innerTickX,
        innerTickY,
        fromX,
        fromY,
        line,
        toX,
        toY;

    applyDefaultContextSettings(options);

    for (iTick = 10; iTick < 220; iTick += 20) {
        iTickRad = degToRad(iTick);
        onArchX = gaugeOptions.radius - (Math.cos(iTickRad) * tickvalue);
        onArchY = gaugeOptions.radius - (Math.sin(iTickRad) * tickvalue);
        innerTickX = gaugeOptions.radius - (Math.cos(iTickRad) * gaugeOptions.radius);
        innerTickY = gaugeOptions.radius - (Math.sin(iTickRad) * gaugeOptions.radius);

        fromX = (options.center.X - gaugeOptions.radius) + onArchX;
        fromY = (gaugeOptions.center.Y - gaugeOptions.radius) + onArchY;
        toX = (options.center.X - gaugeOptions.radius) + innerTickX;
        toY = (gaugeOptions.center.Y - gaugeOptions.radius) + innerTickY;

        // Create a line expressed in JSON
        line = createLine(fromX, fromY, toX, toY, "rgb(127,127,127)", 3, 1);

        // Draw the line
        drawLine(options, line);

    }
}

function drawLargeTickMarks(options) {
    /* The large tick marks against the coloured
     * arc drawn every 10 mph from 10 degrees to
     * 170 degrees.
     */

    var tickvalue = options.levelRadius - 8,
        iTick = 0,
        gaugeOptions = options.gaugeOptions,
        iTickRad = 0,
        innerTickY,
        innerTickX,
        onArchX,
        onArchY,
        fromX,
        fromY,
        toX,
        toY,
        line;

    applyDefaultContextSettings(options);

    tickvalue = options.levelRadius - 2;

    for (iTick = 20; iTick < 220; iTick += 20) {

        iTickRad = degToRad(iTick);

        onArchX = gaugeOptions.radius - (Math.cos(iTickRad) * tickvalue);
        onArchY = gaugeOptions.radius - (Math.sin(iTickRad) * tickvalue);
        innerTickX = gaugeOptions.radius - (Math.cos(iTickRad) * gaugeOptions.radius);
        innerTickY = gaugeOptions.radius - (Math.sin(iTickRad) * gaugeOptions.radius);

        fromX = (options.center.X - gaugeOptions.radius) + onArchX;
        fromY = (gaugeOptions.center.Y - gaugeOptions.radius) + onArchY;
        toX = (options.center.X - gaugeOptions.radius) + innerTickX;
        toY = (gaugeOptions.center.Y - gaugeOptions.radius) + innerTickY;

        line = createLine(fromX, fromY, toX, toY, "rgb(127,127,127)", 3, 0.6);

        drawLine(options, line);
    }
}

function drawTicks(options) {
    drawSmallTickMarks(options);
    drawLargeTickMarks(options);
}

function drawTextMarkers(options) {
    var innerTickX = 0,
        innerTickY = 0,
        iTick = 0,
        gaugeOptions = options.gaugeOptions,
        iTickToPrint = 00;

    applyDefaultContextSettings(options);

    options.ctx.font = 'italic 15px sans-serif';
    options.ctx.textBaseline = 'right';

    options.ctx.beginPath();

    for (iTick = 10; iTick < 220; iTick += 20) {

        innerTickX = gaugeOptions.radius - (Math.cos(degToRad(iTick)) * gaugeOptions.radius);
        innerTickY = gaugeOptions.radius - (Math.sin(degToRad(iTick)) * gaugeOptions.radius);

        if (iTick <= 10) {
            options.ctx.fillText(iTickToPrint, (options.center.X - gaugeOptions.radius - 12) + innerTickX,
                (gaugeOptions.center.Y - gaugeOptions.radius - 12) + innerTickY + 5);
        } else if (iTick < 50) {
            options.ctx.fillText(iTickToPrint, (options.center.X - gaugeOptions.radius - 12) + innerTickX - 5,
                (gaugeOptions.center.Y - gaugeOptions.radius - 12) + innerTickY + 5);
        } else if (iTick < 90) {
            options.ctx.fillText(iTickToPrint, (options.center.X - gaugeOptions.radius - 12) + innerTickX,
                (gaugeOptions.center.Y - gaugeOptions.radius - 12) + innerTickY);
        } else if (iTick === 90) {
            options.ctx.fillText(iTickToPrint, (options.center.X - gaugeOptions.radius - 12) + innerTickX + 4,
                (gaugeOptions.center.Y - gaugeOptions.radius - 12) + innerTickY);
        } else if (iTick < 145) {
            options.ctx.fillText(iTickToPrint, (options.center.X - gaugeOptions.radius - 12) + innerTickX + 10,
                (gaugeOptions.center.Y - gaugeOptions.radius - 12) + innerTickY);
        } else {
            options.ctx.fillText(iTickToPrint, (options.center.X - gaugeOptions.radius - 12) + innerTickX + 15,
                (gaugeOptions.center.Y - gaugeOptions.radius - 12) + innerTickY + 5);
        }

        iTickToPrint += 10;
    }

    options.ctx.stroke();
}

function drawSpeedometerPart(options, alphaValue, strokeStyle, startPos) {
    options.ctx.beginPath();

    options.ctx.globalAlpha = alphaValue;
    options.ctx.lineWidth = 5;
    options.ctx.strokeStyle = strokeStyle;

    options.ctx.arc(options.center.X,
        options.center.Y,
        options.levelRadius,
        Math.PI + (Math.PI / 360 * startPos),
        0 - (Math.PI / 360 * 10),
        false);

    options.ctx.stroke();
}

function drawSpeedometerColourArc(options) {
    var startOfGreen = 10,
        endOfGreen = 200,
        endOfOrange = 280;

    drawSpeedometerPart(options, 1.0, "rgb(204,254,255)", startOfGreen);
    drawSpeedometerPart(options, 0.9, "rgb(2,254,255)", endOfGreen);
    drawSpeedometerPart(options, 0.9, "rgb(1,127,127) ", endOfOrange);

}

function drawNeedleDial(options, alphaValue, strokeStyle, fillStyle) {
    var i = 0;

    options.ctx.globalAlpha = alphaValue;
    options.ctx.lineWidth = 3;
    options.ctx.strokeStyle = strokeStyle;
    options.ctx.fillStyle = fillStyle;

    for (i = 0; i < 30; i++) {

        options.ctx.beginPath();
        options.ctx.arc(options.center.X,
            options.center.Y,
            i,
            0,
            Math.PI,
            true);

        options.ctx.fill();
        options.ctx.stroke();
    }
}

function convertSpeedToAngle(options) {
    var iSpeed = (options.speed / 10),
        iSpeedAsAngle = ((iSpeed * 20) + 10) % 220;

    if (iSpeedAsAngle > 220) {
        iSpeedAsAngle = iSpeedAsAngle - 220;
    } else if (iSpeedAsAngle < 0) {
        iSpeedAsAngle = iSpeedAsAngle + 220;
    }

    return iSpeedAsAngle;
}

function drawNeedle(options) {
    var iSpeedAsAngle = convertSpeedToAngle(options),
        iSpeedAsAngleRad = degToRad(iSpeedAsAngle),
        gaugeOptions = options.gaugeOptions,
        innerTickX = gaugeOptions.radius - (Math.cos(iSpeedAsAngleRad) * 20),
        innerTickY = gaugeOptions.radius - (Math.sin(iSpeedAsAngleRad) * 20),
        fromX = (options.center.X - gaugeOptions.radius) + innerTickX,
        fromY = (gaugeOptions.center.Y - gaugeOptions.radius) + innerTickY,
        endNeedleX = gaugeOptions.radius - (Math.cos(iSpeedAsAngleRad) * gaugeOptions.radius),
        endNeedleY = gaugeOptions.radius - (Math.sin(iSpeedAsAngleRad) * gaugeOptions.radius),
        toX = (options.center.X - gaugeOptions.radius) + endNeedleX,
        toY = (gaugeOptions.center.Y - gaugeOptions.radius) + endNeedleY,
        line = createLine(fromX, fromY, toX, toY, "rgb(127, 127, 127)", 5, 0.6);

    drawLine(options, line);

    drawNeedleDial(options, 0.6, "rgb(127, 127, 127)", "rgb(255,255,255)");
    drawNeedleDial(options, 0.2, "rgb(127, 127, 127)", "rgb(127,127,127)");

}

function buildOptionsAsJSON(canvas, iSpeed) {
    var centerX = 300,
        centerY = 250,
        radius = 120,
        outerRadius = 100;

    return {
        ctx: canvas.getContext('2d'),
        speed: iSpeed,
        center: {
            X: centerX,
            Y: centerY
        },
        levelRadius: radius - 10,
        gaugeOptions: {
            center: {
                X: centerX,
                Y: centerY
            },
            radius: radius
        },
        radius: outerRadius
    };
}

function buildOptionsAsJSON1(canvas, iSpeed) {
    var centerX = 700,
        centerY = 250,
        radius = 120,
        outerRadius = 100;

    return {
        ctx: canvas.getContext('2d'),
        speed: iSpeed,
        center: {
            X: centerX,
            Y: centerY
        },
        levelRadius: radius - 10,
        gaugeOptions: {
            center: {
                X: centerX,
                Y: centerY
            },
            radius: radius
        },
        radius: outerRadius
    };
}

function buildOptionsAsJSON2(canvas, iSpeed) {
    var centerX = 1100,
        centerY = 250,
        radius = 120,
        outerRadius = 100;

    return {
        ctx: canvas.getContext('2d'),
        speed: iSpeed,
        center: {
            X: centerX,
            Y: centerY
        },
        levelRadius: radius - 10,
        gaugeOptions: {
            center: {
                X: centerX,
                Y: centerY
            },
            radius: radius
        },
        radius: outerRadius
    };
}


//new
function buildOptionsAsJSON3(canvas, iSpeed) {
    var centerX = 700,
        centerY = 535,
        radius = 120,
        outerRadius = 50;

    return {
        ctx: canvas.getContext('2d'),
        speed: iSpeed,
        center: {
            X: centerX,
            Y: centerY
        },
        levelRadius: radius - 10,
        gaugeOptions: {
            center: {
                X: centerX,
                Y: centerY
            },
            radius: radius
        },
        radius: outerRadius
    };
}


function clearCanvas(options) {
    options.ctx.clearRect(0, 0, 800, 600);
    applyDefaultContextSettings(options);
}

function draw() {
    var canvas = document.getElementById('speedometer'),
        options = null;
    var canvas1 = document.getElementById('speedometer1'),
        options = null;
    var canvas2 = document.getElementById('speedometer2'),
        options = null;
    var canvas3 = document.getElementById('speedometer3'),
        options = null;

    //Speedometer
    if (canvas !== null && canvas.getContext) {
        options = buildOptionsAsJSON(canvas, iCurrentSpeed);
        clearCanvas(options);
        drawMetallicArc(options);
        drawBackground(options);
        drawTicks(options);
        drawTextMarkers(options);
        drawSpeedometerColourArc(options);
        drawNeedle(options);

    } else {
        alert("Canvas not supported by your browser!");
    }

    //Speedometer 1
    if (canvas1 !== null && canvas1.getContext) {
        options = buildOptionsAsJSON1(canvas1, iCurrentSpeed1);
        clearCanvas(options);
        drawMetallicArc(options);
        drawBackground(options);
        drawTicks(options);
        drawTextMarkers(options);
        drawSpeedometerColourArc(options);
        drawNeedle(options);

    } else {
        alert("Canvas not supported by your browser!");
    }

    //Speedometer 2
    if (canvas2 !== null && canvas2.getContext) {
        options = buildOptionsAsJSON2(canvas2, iCurrentSpeed2);
        clearCanvas(options);
        drawMetallicArc(options);
        drawBackground(options);
        drawTicks(options);
        drawTextMarkers(options);
        drawSpeedometerColourArc(options);
        drawNeedle(options);

    } else {
        alert("Canvas not supported by your browser!");
    }

    // //Speedometer 3 (new)
    if (canvas3 !== null && canvas3.getContext) {
        options = buildOptionsAsJSON3(canvas3, iCurrentSpeed3);
        clearCanvas(options);
        drawMetallicArc(options);
        drawBackground(options);
        drawTicks(options);
        drawTextMarkers(options);
        drawSpeedometerColourArc(options);
        drawNeedle(options);

    } else {
        alert("Canvas not supported by your browser!");
    }

    //speedometer
    if (iTargetSpeed == iCurrentSpeed) {
        clearTimeout(job);
        return;
    } else if (iTargetSpeed < iCurrentSpeed) {
        bDecrement = true;
    } else if (iTargetSpeed > iCurrentSpeed) {
        bDecrement = false;
    }

    if (bDecrement) {
        if (iCurrentSpeed - 10 < iTargetSpeed)
            iCurrentSpeed = iCurrentSpeed - 1;
        else
            iCurrentSpeed = iCurrentSpeed - 5;
    } else {

        if (iCurrentSpeed + 10 > iTargetSpeed)
            iCurrentSpeed = iCurrentSpeed + 1;
        else
            iCurrentSpeed = iCurrentSpeed + 5;
    }

    job = setTimeout("draw()", 5);

    //speedometer 1
    if (iTargetSpeed1 == iCurrentSpeed1) {
        clearTimeout(job1);
        return;
    } else if (iTargetSpeed1 < iCurrentSpeed1) {
        bDecrement1 = true;
    } else if (iTargetSpeed1 > iCurrentSpeed1) {
        bDecrement1 = false;
    }

    if (bDecrement1) {
        if (iCurrentSpeed1 - 10 < iTargetSpeed1)
            iCurrentSpeed1 = iCurrentSpeed1 - 1;
        else
            iCurrentSpeed1 = iCurrentSpeed1 - 5;
    } else {

        if (iCurrentSpeed1 + 10 > iTargetSpeed1)
            iCurrentSpeed1 = iCurrentSpeed1 + 1;
        else
            iCurrentSpeed1 = iCurrentSpeed1 + 5;
    }

    job1 = setTimeout("draw()", 5);

    //speedometer 2
    if (iTargetSpeed2 == iCurrentSpeed2) {
        clearTimeout(job2);
        return;
    } else if (iTargetSpeed2 < iCurrentSpeed2) {
        bDecrement2 = true;
    } else if (iTargetSpeed2 > iCurrentSpeed2) {
        bDecrement2 = false;
    }

    if (bDecrement2) {
        if (iCurrentSpeed2 - 10 < iTargetSpeed2)
            iCurrentSpeed2 = iCurrentSpeed2 - 1;
        else
            iCurrentSpeed2 = iCurrentSpeed2 - 5;
    } else {

        if (iCurrentSpeed2 + 10 > iTargetSpeed2)
            iCurrentSpeed2 = iCurrentSpeed2 + 1;
        else
            iCurrentSpeed2 = iCurrentSpeed2 + 5;
    }

    job2 = setTimeout("draw()", 5);

    // //speedometer 3 (new)
    if (iTargetSpeed3 == iCurrentSpeed3) {
        clearTimeout(job3);
        return;
    } else if (iTargetSpeed3 < iCurrentSpeed3) {
        bDecrement3 = true;
    } else if (iTargetSpeed3 > iCurrentSpeed3) {
        bDecrement3 = false;
    }

    if (bDecrement3) {
        if (iCurrentSpeed3 - 10 < iTargetSpeed3)
            iCurrentSpeed3 = iCurrentSpeed3 - 1;
        else
            iCurrentSpeed3 = iCurrentSpeed3 - 5;
    } else {

        if (iCurrentSpeed3 + 10 > iTargetSpeed3)
            iCurrentSpeed3 = iCurrentSpeed3 + 1;
        else
            iCurrentSpeed3 = iCurrentSpeed3 + 5;
    }

    job3 = setTimeout("draw()", 5);
}

function drawWithInputValue(totalPT, totalPO, totalPR) {

    //value
    var covert1 = (this.totalPT / 40) * 100;
    iTargetSpeed = covert1;
    console.log(iTargetSpeed);

    // Sanity checks
    if (isNaN(iTargetSpeed)) {
        iTargetSpeed = 0;
    } else if (iTargetSpeed < 0) {
        iTargetSpeed = 0;
    } else if (iTargetSpeed > 100) {
        iTargetSpeed = 100;
    }

    job = setTimeout("draw()", 5);

    //value 1
    var covert2 = (this.totalPO / 140) * 100;
    iTargetSpeed1 = covert2;
    console.log(iTargetSpeed1);

    // Sanity checks
    if (isNaN(iTargetSpeed1)) {
        iTargetSpeed1 = 0;
    } else if (iTargetSpeed1 < 0) {
        iTargetSpeed1 = 0;
    } else if (iTargetSpeed1 > 100) {
        iTargetSpeed1 = 100;
    }

    job1 = setTimeout("draw()", 5);

    //value 2
    var covert3 = (this.totalPR / 60) * 100;
    iTargetSpeed2 = covert3;
    console.log(iTargetSpeed2);

    // Sanity checks
    if (isNaN(iTargetSpeed2)) {
        iTargetSpeed2 = 0;
    } else if (iTargetSpeed2 < 0) {
        iTargetSpeed2 = 0;
    } else if (iTargetSpeed2 > 100) {
        iTargetSpeed2 = 100;
    }

    job2 = setTimeout("draw()", 5);

    // //value 3 (new)
    var convert4 = ((this.totalPO + this.totalPR + this.totalPT) / 3) * 100;
    iTargetSpeed3 = convert4;
    console.log(iTargetSpeed3);

    // Sanity checks
    if (isNaN(iTargetSpeed3)) {
        iTargetSpeed3 = 0;
    } else if (iTargetSpeed3 < 0) {
        iTargetSpeed3 = 0;
    } else if (iTargetSpeed3 > 100) {
        iTargetSpeed3 = 100;
    }

    job3 = setTimeout("draw()", 5);
}