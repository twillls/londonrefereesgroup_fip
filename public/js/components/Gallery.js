export default {
    name: "Gallery",

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
                <div class="gallery-top">
                    <h2 class="members-head">GALLERY</h2>
                </div>
                <div class="gallery-bottom">
                    <div class="row">
                        <div class="entry">
                        </div>
                        <div class="entry">
                        </div>
                    </div>
                     <div class="row">
                        <div class="entry">
                        </div>
                        <div class="entry">
                        </div>
                    </div>
                     <div class="row">
                        <div class="entry">
                        </div>
                        <div class="entry">
                        </div>
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