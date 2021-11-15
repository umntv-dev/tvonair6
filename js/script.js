// ===========
//  Custom JS
// ===========
const logoIG = document.getElementById("logoIG");

$('#navbarNav').on('show.bs.collapse', function () {
    logoIG.style.margin = "auto";
});

$('#navbarNav').on('hidden.bs.collapse', function () {
    logoIG.style.margin = 0;
});

// Logo Navbar Hover
if (window.matchMedia('(max-width: 990px)').matches) {
    $("#logo").mouseover(function () {
        $(".logo-detail").css("opacity", "1");
    });
    $("#logo").mouseout(function () {
        $(".logo-detail").css("opacity", "1");
    });
} else {
    $("#logo").mouseover(function () {
        $(".logo-detail").css("opacity", "1");
    });
    $("#logo").mouseout(function () {
        $(".logo-detail").css("opacity", "0");
    });
}

// Loader
$(window).on("load",function(){
    $(".loader-bg").css('z-index', -1);
});









// ========================
//  Fullpage Configuration
// ========================
var myFullpage = new fullpage("#fullpage", {
    anchors: ["home", "events", "activities", "aboutus", "contactus"],
    sectionsColor: ["#FAF4D4", "#003049", "#003049", "#003049", "#003049"],
    // responsiveWidth: 900,

    // navigation: true,
    // navigationPosition: 'right',
    // navigationTooltips: ['First page', 'Second page', 'Third and last page'],

    continuousVertical: false,
    slidesNavigation: true,
    loopHorizontal: false,
    interlockedSlides: true,
    //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
    easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',

    afterResponsive: function (isResponsive) { },
    afterLoad: function (anchorLink, index) { },
    onLeave: function (index, nextIndex, direction) {
        const section = nextIndex.item;

        // tl.fromTo(element, speed, from, to);

        // if (nextIndex.index === 0 && !(window.matchMedia('(max-width: 990px)').matches)) { // Home Section
        if (nextIndex.index === 0) { // Home Section
            const tvText = section.querySelector("#tv-text img");
            const onText = section.querySelector("#on-text img");
            const airText = section.querySelector("#air-text img");
            const text6 = section.querySelector("#text6 img");

            const tl = new TimelineMax({ delay: 0.5 });

            tl.fromTo(tvText, .3, { opacity: 0, x: "0"}, { x: "10", opacity: 1 });
            tl.fromTo(onText, .3, { opacity: 0, y: "200"}, { y: "0", opacity: 1 });
            tl.fromTo(airText, .3, { opacity: 0, y: "200"}, { y: "0", opacity: 1 });
            tl.fromTo(text6, .3, { opacity: 0, x: "0"}, { x: "10", opacity: 1 });
        }
        
        if (nextIndex.index === 1) { // Events Section
            // const top = section.querySelector("#eImage1 img")
            // const bottom = section.querySelector("#eImage2 img")
            const title = section.querySelector("h1");
            const paragraph = section.querySelector("p");
            const btn = section.querySelector("a");
            const tl = new TimelineMax({ delay: 0.5 });
            // tl.fromTo(top, 0.5, { y: "-10", opacity: 0 }, { y: "10", opacity: 1 });
            // tl.fromTo(bottom, 0.5, { y: "10", opacity: 0 }, { y: "-20", opacity: 1 });
            tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
            tl.fromTo(paragraph, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
            tl.fromTo(btn, 0.5, { opacity: 0 }, { opacity: 1 });
        }

        if (nextIndex.index === 2) { // Activities Section
            const title = section.querySelector("h1");
            const aftermovie = section.querySelector("#afterMovie");
            const actContent1 = section.querySelector("#act-content1");
            const actContent2 = section.querySelector("#act-content2");
            const actContent3 = section.querySelector("#act-content3");
            
            const tl = new TimelineMax({ delay: 0.4 });
            tl.fromTo(title, 0.4, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
            tl.fromTo(aftermovie, 0.35, { x: "50", opacity: 0 }, { x: "0", opacity: 1 });
            tl.fromTo(actContent1, 0.35, { x: "-50", opacity: 0 }, { x: "0", opacity: 1 });
            tl.fromTo(actContent2, 0.35, { x: "50", opacity: 0 }, { x: "0", opacity: 1 });
            tl.fromTo(actContent3, 0.35, { x: "-50", opacity: 0 }, { x: "0", opacity: 1 });
        }

        if (nextIndex.index === 3) { // About Us Section
            const about_title = section.querySelector("h1");
            const about_p = section.querySelector("p");
            
            const tl = new TimelineMax({ delay: 0.4 });
            tl.fromTo(about_title, 0.4, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
            tl.fromTo(about_p, 0.35, { x: "50", opacity: 0 }, { x: "0", opacity: 1 });
        }

        if (nextIndex.index === 4) { // Contact Us Section
            const about_title = section.querySelector("h1");
            const gmail = section.querySelector("#gmail_wrap");
            const ig = section.querySelector("#ig_wrap");
            
            const tl = new TimelineMax({ delay: 0.4 });
            tl.fromTo(about_title, 0.4, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
            tl.fromTo(gmail, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
            tl.fromTo(ig, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
        }

    },
    onSlideLeave: function(section, origin, destination, direction) {
        const sections = section.item.id;
        const slide = destination.item;

        if(sections === "section1") {
            if(destination.index === 0) {
                const title = slide.querySelector("h1");
                const paragraph = slide.querySelector("p");
                const btn = slide.querySelector("a");

                const tl = new TimelineMax({ delay: 0.5 });

                tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
                tl.fromTo(paragraph, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(btn, 0.5, { opacity: 0 }, { opacity: 1 });
            }

            if(destination.index === 1) {
                const title = slide.querySelector(".title-ps");
                const paragraph = slide.querySelector("#p-ps");
                // const soon = slide.querySelector(".soon-ps img");
                const btn = slide.querySelector(".btn-pendaftaran");
				const n1 = slide.querySelector(".narsum-ahmad img");
                const n2 = slide.querySelector(".narsum-azizah img");
                const n3 = slide.querySelector(".narsum-hera img");
                
                const tl = new TimelineMax({ delay: 0.5 });

                tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
                tl.fromTo(paragraph, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(btn, 0.5, { opacity: 0 }, { opacity: 1 });
				tl.fromTo(n1, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(n2, 0.5, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(n3, 0.5, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
                // tl.fromTo(soon, 0.5, { opacity: 0 }, { opacity: 1 }); 
            }

            if(destination.index === 2) {
                const title = slide.querySelector(".title-snd");
                const paragraph = slide.querySelector("#p-snd");
                // const soon = slide.querySelector(".soon-snd img");
				const n1 = slide.querySelector(".narsum-sasmito img");
                const n2 = slide.querySelector(".narsum-amanda img");
                
                const tl = new TimelineMax({ delay: 0.5 });

                tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
                tl.fromTo(paragraph, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
				tl.fromTo(n1, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(n2, 0.5, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
                // tl.fromTo(soon, 0.5, { opacity: 0 }, { opacity: 1 });
            }
			
			if(destination.index === 3){
                const title = slide.querySelector(".title-su");
                const paragraph = slide.querySelector("#p-su");
				const narsum = slide.querySelector(".narsum-danu img");
                
                const tl = new TimelineMax({ delay: 0.5 });

                tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
                tl.fromTo(paragraph, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
				tl.fromTo(narsum, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
            }
			
 			if(destination.index === 4){
                const title = slide.querySelector(".title-mt2");
                const paragraph = slide.querySelector("#p-mt2");
                const narsum = slide.querySelector(".narsum-abram img");
                
                const tl = new TimelineMax({ delay: 0.5 });

                tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
                tl.fromTo(paragraph, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
                tl.fromTo(narsum, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
            }
            
        }

    },
});

AOS.init();