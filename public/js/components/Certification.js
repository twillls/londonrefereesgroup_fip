export default {
    name: "Certification",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    ` <div id="members">
        <div class="left">
            <div class="login-container">
                <h2 class="login-head">MEMBERS LOGIN</h2>
                <form class="login-form">
                    <input type="email" placeholder="Email Address"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="submit" value="SIGN IN"></input>
                </form>
                <div class="bottom-text">
                    <p>Want to become a member?</p>
                    <p>Apply <a href="/" class="apply-link">HERE</a>.</p>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="members-text">
                <div class="partner-top">
                    <h2 class="members-head">PARTNER CERTIFICATION CLINICS</h2>
                </div>
                <div class="partner-bottom">
                    <div class="partner">
                        <h3 class="name">PARTNER NAME</h3>
                        <p class="desc">Short description of available certifications.</p>
                        <a class="visit" href="/">VISIT WEBSITE</a>
                    </div>
                    <div class="partner-left">
                        <h3 class="name">PARTNER NAME</h3>
                        <p class="desc">Short description of available certifications.</p>
                        <a class="visit" href="/">VISIT WEBSITE</a>
                    </div>
                    <div class="partner">
                        <h3 class="name">PARTNER NAME</h3>
                        <p class="desc">Short description of available certifications.</p>
                        <a class="visit" href="/">VISIT WEBSITE</a>
                    </div>
                </div>
            </div>
        </div>   
    </div>
    `,

    computed: {
    },

    components: {

    },

    methods: {
    }

}