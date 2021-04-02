
export default {
    name: "Footer",

    props: [""],

    data() {
        return {
           
        };
    },

    template: 
    `<section id="main-footer">
    <div class="left">
        <div class="column">
            <router-link to="" v-slot="{href, route, navigate}" custom>
                <p :href="href" @click="navigate" name="landing" class="biglink">Home</p></li>
            </router-link>
            <router-link to="/about" v-slot="{href, route, navigate}" custom>
                <p :href="href" @click="navigate" name="about" class="biglink">About Us</p>
            </router-link>

            <router-link to="/story" v-slot="{href, route, navigate}" custom>
                <p :href="href" @click="navigate" name="story" class="smalllink">Our Story</p>
            </router-link>

            <router-link to="/partners" v-slot="{href, route, navigate}" custom>
                <p :href="href" @click="navigate" class="smalllink">Our Partners</p>
            </router-link>

            <router-link to="/message" v-slot="{href, route, navigate}" custom>
                <p :href="href" @click="navigate" class="smalllink">A Message from the President</p>
            </router-link>

            <router-link to="/contact" v-slot="{href, route, navigate}" custom>
                <p :href="href" @click="navigate" class="smalllink">Contact Us</p>
            </router-link>

        </div>
        <div class="column">
        <router-link to="/services" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" name="services" class="biglink">Services</p>
            </router-link>

            <router-link to="/membership" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="smalllink">Membership</p>
            </router-link>

            <router-link to="/skills" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate"  class="smalllink">Training</p>
            </router-link>

            <router-link to="/booking" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="smalllink">Booking</p>
            </router-link>

        </div>
        <div class="column">
        <router-link to="/membership" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="biglink">Membership</p>
            </router-link>

            <router-link to="/stucture" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="smalllink">Committee Structure</p>
            </router-link>

            <router-link to="/certification" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="smalllink">Partner Certificate Clinics</p>
            </router-link>

            <router-link to="/skills" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="smalllink">Skill Building Workshops</p>
            </router-link>

            <router-link to="/scheduling" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="smalllink">Scheduling</p>
            </router-link>

            <router-link to="/gallery" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="smalllink">Gallery</p>
            </router-link>

        </div>
        <div class="column">
        <router-link to="/juniors" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="biglink">Junior Membership Program</p>
            </router-link>

            <router-link to="/partners" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="biglink">Our Partners</p>
            </router-link>

            <router-link to="/education" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="biglink">Education</p>
            </router-link>

            <router-link to="/booking" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="biglink">Booking Information</p>
            </router-link>

        </div>
    </div>
    <div class="right">
        <div class="column">
        <router-link to="/contact" v-slot="{href, route, navigate}" custom>
            <p :href="href" @click="navigate" class="biglink">CONTACT US</p>
            </router-link>

            <p class="contact-info">
                lrg@londonrefereesgroup.com <br>
                (555) 555-5555 <br>
                Mailing Address Line 1<br>
                Address Line 2<br>
                London, ON<br>
                N5N 5N5
            </p>
        </div>
        <div class="column">
            <p class="footer-name">LONDON<br>REFEREES<br>GROUP</p>
        </div>
    </div>
    <div class="copy">[COPYRIGHT]</div>
</section>`,

    methods: {
        setView(e) {
            debugger;
            let newView = e.target.getAttribute("name");
            this.$emit("setview", newView);
        }
    }

}