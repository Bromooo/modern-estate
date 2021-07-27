let count = 0;
const targets = document.querySelectorAll(".motiv");

function openNav(){
    gsap.to("#mySidenav", {
        duration: 1,
        width: "100%",
        ease: "back"
    });
}
function closeNav(){
    gsap.to("#mySidenav", {
        duration: 1,
        width: 0,
        ease: "back"
    });
}
function loadd(){

    gsap.set(targets, { xPercent: 100} );
    gsap.set(targets[0], { xPercent: 0} );
    
    function slideIt(){
        gsap.to(targets[count], {
            xPercent: -100
        });
        count = count < targets.length -1 ? ++count : 0;
        gsap.fromTo(targets[count], {xPercent : 100}, {xPercent : 0, ease:"back", duration: 1 });
        gsap.to({}, { duration: 4.2, onComplete: slideIt });
    }
    
    gsap.delayedCall(4, () => slideIt());
    
    // gsap.from('.hero', {
    
    //         opacity: 0,
    //         duration: 1,
    //         y: -50
    //         //ease: 'Elastic.easeInOut'
    //     });
    // gsap.from('.motiv .info-cont', {
    //     opacity: 0,
    //     duration: 1,
    //     y: -100
    //     //ease: 'Elastic.easeInOut'
    // });
    
    setInterval(function(){
        gsap.from('.motiv .info-cont', {
            delay: 0.2,
            opacity: 0,
            duration: 1,
            y: -130
            //ease: 'Elastic.easeInOut'
        });  
    },4200 );
    
    
    
    
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2');
    const grid3 = document.getElementById('grid3');
    const grid4 = document.getElementById('grid4');
    
    grid1.addEventListener("mouseover", function(){
        //console.log("over");
        gsap.to('.grid1', {
            x: 10,
            y: 10,
            duration: 0.5,
            ease: "Power3.easeOut"
        });
        grid1.addEventListener('mouseout', function(){
            //console.log("out");
            gsap.to('.grid1', {
                x: 0,
                y: 0,
                duration: 1,
                ease: "back"
            }); 
        });
    });
    grid2.addEventListener("mouseover", function(){
        //console.log("over");
        gsap.to('.grid2', {
            x: -10,
            y: 10,
            duration: 0.5,
            ease: "Power3.easeOut"
        });
        grid2.addEventListener('mouseout', function(){
            //console.log("out");
            gsap.to('.grid2', {
                x: 0,
                y: 0,
                duration: 1,
                ease: "back"
            }); 
        });
    });
    grid3.addEventListener("mouseover", function(){
        //console.log("over");
        gsap.to('.grid3', {
            x: 10,
            y: -10,
            duration: 0.5,
            ease: "Power3.easeOut"
        });
        grid3.addEventListener('mouseout', function(){
            //console.log("out");
            gsap.to('.grid3', {
                x: 0,
                y: 0,
                duration: 1,
                ease: "back"
            }); 
        });
    });
    grid4.addEventListener("mouseover", function(){
        //console.log("over");
        gsap.to('.grid4', {
            x: -10,
            y: -10,
            duration: 0.5,
            ease: "Power3.easeOut"
        });
        grid4.addEventListener('mouseout', function(){
            //console.log("out");
            gsap.to('.grid4', {
                x: 0,
                y: 0,
                duration: 1,
                ease: "back"
            }); 
        });
    });
}