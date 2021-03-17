export default {
    name: "NavBar",

    props: [""],

    data() {
        return {
            ddlist: [],
            ddOut: false
        };
    },

    template: 
    `  <div class="top-nav">
        <transition name="fade" appear>
        <div class="dropdown" @mouseleave="closeDropdown" v-show="ddOut">
            <div class="dd-box" v-for="sublink in ddlist" :key="sublink.name" 
            :name="sublink.name" @click="setView">
                <a class="dd-sublink">{{sublink.text}}</a>
            </div>
        </div>
        </transition>
            <div @mouseover="openDropdown" @click="setView" name="about" class="nav-box">
                <a class="nav-link">
                    ABOUT US
                </a>
            </div>
            <div  @mouseover="openDropdown" @click="setView" name="services" class="nav-box">
                <a class="nav-link">
                    SERVICES
                </a>
            </div>
            <div  @mouseover="openDropdown" @click="setView" class="nav-box" name="members">
                <a class="nav-link">
                    MEMBERSHIP
                </a>
            </div>
            <div  @mouseover="openDropdown" @click="setView" name="landing" class="nav-logo">
                <img src="images/logo.png">
            </div>
            <div  @mouseover="openDropdown" @click="setView" name="jr" class="nav-box">
                <a class="nav-link">
                    JUNIORS
                </a>
            </div>
            <div  @mouseover="openDropdown" class="nav-box" @click="setView" name="edu">
                <a class="nav-link">
                    EDUCATION
                </a>
            </div>
            <div  @mouseover="openDropdown" class="nav-box" @click="setView" name="booking">
                <a class="nav-link book">
                    BOOKING
                </a>
            </div>
        </div>
    `,

    methods: {
        setView(e) {
            let newView = e.target.getAttribute("name");
            this.$emit("setview", newView);
        },

        openDropdown(e) {
            if(screen.width < 1024) {
                return;
            } else {
            let thisLink =  e.target.getAttribute("name");
            let dd = document.querySelector(".dropdown");
            var thisList = [];
            this.ddOut = true;
            if (thisLink == "about") {
                dd.style.transform = "translateX(0vw)";
                thisList = [
                    { name: "story", text: "Our Story"},
                    { name: "partners", text: "Our Partners"},
                    { name: "message", text: "A Message from our Presnameent"},
                    { name: "contact", text: "Contact Us"},
                ]
            }
            else if (thisLink == "members") {
                dd.style.transform = "translateX(27.4vw)";
                thisList = [
                    { name: "structure", text: "Committee Structure"},
                    { name: "certification", text: "Partner Certification Clinics"},
                    { name: "skills", text: "Skill Building Workshops"},
                    { name: "scheduling", text: "Scheduling"},
                    { name: "gallery", text: "Gallery"},
                    { name: "join", text: "Application"}
                ]
            }
            this.ddlist = thisList;
        }
        },

        closeDropdown(e) {
           this.ddOut = false;
        },
    }

}