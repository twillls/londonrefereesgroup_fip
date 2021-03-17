import Landing from "./components/Landing.js";
import NavBar from "./components/NavBar.js";
import About from "./components/About.js";
import Story from "./components/Story.js";
import Partners from "./components/Partners.js";
import President from "./components/President.js";
import Contact from "./components/Contact.js";
import Services from "./components/Services.js";
import Membership from "./components/Membership.js";
import Juniors from "./components/Juniors.js";
import Education from "./components/Education.js";
import Booking from "./components/Booking.js";
import Footer from "./components/Footer.js";

(() => {

    new Vue({

        el: "#app",

        data: {
            currentView: "",
            newView: "members"
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
            "jr": Juniors,
            "edu": Education,
            "booking": Booking,
            "foot": Footer
        }
    })
})();