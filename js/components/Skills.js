export default {
    name: "Skills",

    props: [""],

    data() {
        return {
        };
    },

    
    /****** TO-DO *******/
    /* - check if this data should be dynamic or not */
    /* - if not: add <img> in each workshops's div and just link to the corresponding image, 
        change content here in template */
    /* - if so: see notes at Gallery.js and Partners.js for what needs to be done */
    
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
                <div class="skills-top">
                    <h2 class="members-head">SKILL BUILDING WORKSHOPS</h2>
                </div>
                <div class="skills-bottom">
                    <div class="workshop-left">
                        <h3 class="name">WORKSHOP NAME</h3>
                        <p class="desc">Short description of what this workshop is, workshop times, etc.</p>
                        <a class="visit" href="/contact">CONTACT US TO APPLY</a>
                    </div>
                    <div class="workshop-right">
                    <h3 class="name">WORKSHOP NAME</h3>
                    <p class="desc">Short description of available certifications.</p>
                        <a class="visit" href="/contact">CONTACT US TO APPLY</a>
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