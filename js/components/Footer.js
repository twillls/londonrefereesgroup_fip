
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
            <p @click="setView" name="landing" class="biglink">Home</p></li>
            <p @click="setView"name="about" class="biglink">About Us</p>
            <p @click="setView"name="story" class="smalllink">Our Story</p>
            <p @click="setView"name="partners" class="smalllink">Our Partners</p>
            <p @click="setView"name="president" class="smalllink">A Message from the President</p>
            <p @click="setView"name="contact" class="smalllink">Contact Us</p>
        </div>
        <div class="column">
            <p @click="setView"name="services" class="biglink">Services</p>
            <p @click="setView"name="members" class="smalllink">Membership</p>
            <p @click="setView"name="training" class="smalllink">Training</p>
            <p@click="setView" name="booking" class="smalllink">Booking</p>
        </div>
        <div class="column">
            <p @click="setView"name="members"class="biglink">Membership</p>
            <p @click="setView"name="structure"class="smalllink">Committee Structure</p>
            <p @click="setView"name="certification"class="smalllink">Partner Certification Clinics</p>
            <p @click="setView"name="skills"class="smalllink">Skill Building Workshops</p>
            <p @click="setView"name="scheduling"class="smalllink">Scheduling</p>
            <p @click="setView"name="gallery"class="smalllink">Gallery</p>
        </div>
        <div class="column">
            <p @click="setView"name="jr"class="biglink">Junior Membership Program</p>
            <p @click="setView"name="partners"class="biglink">Our Partners</p>
            <p @click="setView"name="edu"class="biglink">Education</p>
            <p @click="setView"name="booking"class="biglink">Booking Information</p>
        </div>
    </div>
    <div class="right">
        <div class="column">
            <p @click="setView"name="contact"class="biglink">CONTACT US</p>
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
            let newView = e.target.name;
            this.$emit("setview", newView);
        }
    }

}