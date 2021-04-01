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
            <div class="dd-box-wrap" v-for="sublink in ddlist" :key="sublink.name" 
            :name="sublink.name">
            <router-link :to="sublink.path" v-slot="{ href, route, navigate }" custom>
            <div class="dd-box" :href="href" @click="navigate">
                <a class="dd-sublink" :name="sublink.name" :href="href" @click="navigate">{{sublink.text}}</a>
            </div>
            </div>
        </div>
        </transition>
        <router-link to="/about" v-slot="{ href, route, navigate }" custom>
            <div :href="href" @click="navigate" @mouseover="openDropdown" name="about" class="nav-box">
                <a  class="nav-link" name="about">
                    ABOUT US
                </a>
            </div>
        </router-link>
        <router-link to="/services" v-slot="{ href, route, navigate }" custom>
            <div :href="href" @click="navigate" name="services" class="nav-box">
                <a class="nav-link" name="about">
                    SERVICES
                    </a>
            </div>
            </router-link>
        <router-link to="/membership" v-slot="{ href, route, navigate }" custom>
            <div :href="href" @click="navigate" @mouseover="openDropdown" class="nav-box" name="members">
                <a class="nav-link" name="members">
                    MEMBERSHIP
                    </a>
            </div>
            </router-link>
        <router-link to="/" v-slot="{ href, route, navigate }" custom>
            <div :href="href" @click="navigate" name="landing" class="nav-logo">
                <img name="landing" src="images/logo.png" >
            </div>
            </router-link>
        <router-link to="/juniors" v-slot="{ href, route, navigate }" custom>
            <div :href="href" @click="navigate"  name="jr" class="nav-box">
                <a class="nav-link" name="about">
                    JUNIORS
                </a>
            </div>
            </router-link>
        <router-link to="/education" v-slot="{ href, route, navigate }" custom>
            <div :href="href" @click="navigate" class="nav-box" name="edu">
                <a class="nav-link" name="about">
                    EDUCATION
                    </a>
            </div>
            </router-link>
        <router-link to="/booking" v-slot="{ href, route, navigate }" custom>
            <div :href="href" @click="navigate" class="nav-box" name="booking">
                <a class="nav-link" name="about">
                    BOOKING
                    </a>
                </div>
            </router-link>
        </div>
    `,

    methods: {
        setView(e) {
            debugger;
            let newView = e.target.getAttribute("name");
            this.$emit("setview", newView);
        },

        openDropdown(e) {
            debugger;
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
                    { path: "/story", name: "story", text: "Our Story"},
                    { path: "/partners", name: "partners", text: "Our Partners"},
                    { path: "/message", name: "message", text: "A Message from our President"},
                    { path: "/contact", name: "contact", text: "Contact Us"},
                ]
            }
            else if (thisLink == "members") {
                dd.style.transform = "translateX(27.4vw)";
                thisList = [
                    { path: "/structure", name: "structure", text: "Committee Structure"},
                    { path: "/certification", name: "certification", text: "Partner Certification Clinics"},
                    { path: "/skills", name: "skills", text: "Skill Building Workshops"},
                    { path: "/scheduling", name: "scheduling", text: "Scheduling"},
                    { path: "/gallery", name: "gallery", text: "Gallery"},
                    { path: "/join", name: "join", text: "Application"}
                ]
            }
            this.ddlist = thisList;
        }
        },

        closeDropdown(e) {
           this.ddOut = false;
        },

        clicked(e) {
            console.log(e.target);
        }
    }

}