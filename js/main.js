import Landing from "./components/Landing.js";
import NavBar from "./components/NavBar.js";
import About from "./components/About.js";
import Story from "./components/Story.js";
import Partners from "./components/Partners.js";
import President from "./components/President.js";
import Contact from "./components/Contact.js";
import Services from "./components/Services.js";
import Membership from "./components/Membership.js";
import Structure from "./components/Structure.js";
import Certification from "./components/Certification.js";
import Skills from "./components/Skills.js";
import Scheduling from "./components/Scheduling.js";
import Gallery from "./components/Gallery.js";
import Join from "./components/Join.js";
import Juniors from "./components/Juniors.js";
import Education from "./components/Education.js";
import Booking from "./components/Booking.js";
import Footer from "./components/Footer.js";
import Lightbox from "./components/Lightbox.js";


/************** (FRONT-END) TO-DO ***************/
/* UPDATING COMPONENTS WITH DYNAMIC DATA AS NEEDED: see individual commponents' js file for more specific notes */
/* MEMBERS ACCOUNT/PROFILE PAGE?? - check if this is needed */
/* LOGOUT BUTTON (top right corner?) - OR "profile" button that includes logout option on dropdown */
/* CONNECTION FROM FRONT-END TO BACK-END */
/* MOBILE & TABLET RESPONSIVE STYLES FOR ALL COMPONENTS(!!!!!!!) */

(() => {

    new Vue({

        el: "#app",

        data: {
            currentView: "",
            newView: "booking"
         },

            mounted: function() {   
            console.log("Vue is mounted, trying a fetch for the initial data");
        },

        computed: {
            setView: function() {
                this.currentView = this.newView;
                return this.currentView;
            },
        },

        updated: function() {
        },

        methods: {
            updateView(view) {
                this.newView = view;
            },

            toggleNav() {
                let nav = document.querySelector(".top-nav");
                let navbutton = document.querySelector(".menu-button");
                if(!nav.classList.contains("showing")) {
                    nav.classList.add("showing");
                    navbutton.classList.add("button-showing");
                } else {
                    nav.classList.add("hiding");
                    navbutton.classList.remove("button-showing");
                    setTimeout(function() {
                        nav.classList.remove("showing");
                        nav.classList.remove("hiding");
                    }, 300);
                }
            },

            lightboxContents(contents) {
                debugger;
                let contentsUrl = `./images/${contents}.jpg`;
                console.log(contentsUrl);
                document.querySelector(".lb-image").src = contentsUrl;
            }

            },

        components: {
            "landing": Landing,
            "navbar": NavBar,
            "about": About,
            "story": Story,
            "partners": Partners,
            "message": President,
            "contact": Contact,
            "services": Services,
            "members": Membership,
            "structure": Structure,
            "certification": Certification,
            "skills": Skills,
            "scheduling": Scheduling,
            "gallery": Gallery,
            "join": Join,
            "jr": Juniors,
            "edu": Education,
            "booking": Booking,
            "foot": Footer,
            "lightbox": Lightbox
        }
    })
})();