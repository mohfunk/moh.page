// HTML Elements
var logo;
var copyright;
var abstraction;
var mohra;
var about;
var blog;
// Variables
var bar_y;
var bar_p;
var box_x, box_y;


// Animations
function logoButtonEnt() {
    anime.remove('button#lg.logo');
    anime({
        targets: 'button#lg.logo',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function logoButtonExt() {
    anime.remove('button#lg.logo');
    anime({
        targets: 'button#lg.logo',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}

function abstButtonEnt() {
    anime.remove('button#abst.pg');
    anime({
        targets: 'button#abst.pg',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function abstButtonExt() {
    anime.remove('button#abst.pg');
    anime({
        targets: 'button#abst.pg',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}

function mohButtonEnt() {
    anime.remove('button#mohra.pg');
    anime({
        targets: 'button#mohra.pg',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function mohButtonExt() {
    anime.remove('button#mohra.pg');
    anime({
        targets: 'button#mohra.pg',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}

function blgButtonEnt() {
    anime.remove('button#blog.pg');
    anime({
        targets: 'button#blog.pg',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function blgButtonExt() {
    anime.remove('button#blog.pg');
    anime({
        targets: 'button#blog.pg',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}
function abtButtonEnt() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function abtButtonExt() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}
function windowResized() {
    logo.remove();
    copyright.remove();
    abstraction.remove();
    mohra.remove();
    blog.remove();
    about.remove();
    resizeCanvas(windowWidth, windowHeight);
    setLogo();
    setPages();
    setCopyright();
}

function setLogo() {
    logo = createButton('Abstractum');
    logo.id('lg');
    logo.class('logo');
    if(width >= 880) {
        logo.style('font-size', '20px');
    } else {
        logo.style('font-size', '14px');

    }
    logo.position(width/2 - logo.width/2, 0.05*height);
    logo.center('horizontal');
    var ani_entry = anime({
        targets: 'button#lg.logo',
        translateY: [-100,0],
        duration: 3000,
        elasticity: 400
    });
    logo.mouseOver(logoButtonEnt);
    logo.mouseOut(logoButtonExt);


}
function setPages() {
    bar_y = 0.05*height;
    bar_p = width/8;
    abstraction = createButton('abstraction');
    abstraction.id('abst');
    abstraction.class('pg');
    if(width >= 880) {
        abstraction.style('font-size', '14px');
        abstraction.position(width/2 - bar_p*2 - abstraction.width/2 , bar_y);
        var abst_entry = anime({
            targets: 'button#abst.pg',
            translateX: [-100,0],
            duration: 3000,
            elasticity: 400
        });

    } else {
        abstraction.style('font-size', '8px');
        abstraction.position(width/2 - abstraction.width/3, bar_y*2.5);
        var abst_entry = anime({
            targets: 'button#abst.pg',
            translateX: [-100,0],
            duration: 3000,
            elasticity: 400
        });


    }

    abstraction.mouseOver(abstButtonEnt);
    abstraction.mouseOut(abstButtonExt);




    mohra = createButton('Mohra');
    mohra.id('mohra');
    mohra.class('pg');
    if(width >= 880) {
        mohra.style('font-size', '14px');
        mohra.position(width/2 - bar_p - mohra.width/2 , bar_y);
        var mohra_entry = anime({
            targets: 'button#mohra.pg',
            translateX: [-100,0],
            duration: 3000,
            elasticity: 400
        });

    } else {
        mohra.style('font-size', '8px');
        mohra.position(width/2 - mohra.width/3, bar_y*3.5);

        var mohra_entry = anime({
            targets: 'button#mohra.pg',
            translateX: [100,0],
            duration: 3000,
            elasticity: 400
        });

    }

    mohra.mouseOver(mohButtonEnt);
    mohra.mouseOut(mohButtonExt);


    blog = createButton('Blog');
    blog.id('blog');
    blog.class('pg');
    if(width >= 880) {
        blog.style('font-size', '14px');
        blog.position(width/2 + bar_p - blog.width/2 , bar_y);
        var blog_entry = anime({
            targets: 'button#blog.pg',
            translateX: [100,0],
            duration: 3000,
            elasticity: 400
        });

    } else {
        blog.style('font-size', '8px');
        blog.position(width/2 - blog.width/3 , bar_y*4.5);
        var blog_entry = anime({
            targets: 'button#blog.pg',
            translateX: [-100,0],
            duration: 3000,
            elasticity: 400
        });

    }

    blog.mouseOver(blgButtonEnt);
    blog.mouseOut(blgButtonExt);

    about = createButton('About');
    about.id('about');
    about.class('pg');
    if(width >= 880) {
        about.style('font-size', '14px');
        about.position(width/2 + bar_p*2 - about.width/2 , bar_y);
        var abt_entry = anime({
            targets: 'button#about.pg',
            translateX: [100,0],
            duration: 3000,
            elasticity: 400
        });

    } else {
        about.style('font-size', '8px');
        about.position(width/2 - about.width/3 , bar_y*5.5);
        var abt_entry = anime({
            targets: 'button#about.pg',
            translateX: [100,0],
            duration: 3000,
            elasticity: 400
        });

    }

    about.mouseOver(abtButtonEnt);
    about.mouseOut(abtButtonExt);

}
function setCopyright() {
    copyright = createP('© 2018 Mohammed Fahad. All rights reserved. <br> Waterloo, Ontario CA. </br>');
    copyright.id('copyr');
    copyright.class('cp');
    if(width >= 880) {
        copyright.style('font-size', '14px');

    } else {
        copyright.style('font-size', '8px');
    }
    copyright.position(width/2, 0.90*height);
    copyright.center('horizontal');
    var ani_entry = anime({
        targets: 'p#copyr.cp',
        translateY: [100,0],
        duration: 3000,
        elasticity: 400
    });

}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    if(width >= 880) {
        box_x = 30;
        box_y = 70;
    } else {
        box_x = 15;
        box_y = 35;
    }
    setLogo();
    setPages();
    setCopyright();


}

function draw() {
    background(0);
    noStroke();
    fill(190);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.001);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.009);
    box(box_x+ abs((10 * sin(frameCount *0.02))),box_y + abs((10 * cos(frameCount *0.01))));
    pop();
}
