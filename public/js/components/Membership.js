export default {
    name: "Membership",

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
                <div class="top">
                    <h2 class="members-head">MEMBERSHIP COMMITTEE</h2>
                    <p>A couple paragraphs’ description of committee’s purpose,
                    history, or whatever information is needed. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Phasellus eu nibh
                    eget erat accumsan suscipit. Quisque ac condimentum ante,
                    a porttitor nunc. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae.</p>
                </div>
                <div class="bottom">
                    <h3>ALREADY A MEMBER?</h3>
                    <p>Don’t miss out! Sign up for reminders and automatically
                    get London Referees Group news and updates sent
                    directly to your email or phone.</p>
                    <p>Register your contact information <a href="/" class="register-link">here</a>.</p>
                </div>
            </div>
        </div>
                
    </div>
    `,

    methods: {
    }
}
