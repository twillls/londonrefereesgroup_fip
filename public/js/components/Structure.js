export default {
    name: "Structure",

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
        <h2 class="structure-head">COMMITTEE STRUCTURE</h2>
            <div class="structure-container">
                <div class="structure">
                    <div class="structure-left">
                        
                        <div class="role-img"></div>
                         <div>
                            <h4 class="title">ROLE EXAMPLE</h4>
                            <p class="name">Full Name</p>
                            <p class="info">Email & Phone #</p>
                            <p class="desc">A short description of the
                            duties & responsibilities of
                            this role.</p>
                        </div>
                            <div class="role-img"><img src=""></img></div>
                        <div>
                            <h4 class="title">ROLE EXAMPLE</h4>
                            <p class="name">Full Name</p>
                            <p class="info">Email & Phone #</p>
                            <p class="desc">A short description of the
                            duties & responsibilities of
                            this role.</p>
                        </div>
                    </div>
                    <div class="middle">
                        
                    </div>
                    <div class="structure-right">
                        <div>
                            <h4 class="title">ROLE EXAMPLE</h4>
                            <p class="name">Full Name</p>
                            <p class="info">Email & Phone #</p>
                            <p class="desc">A short description of the
                            duties & responsibilities of
                            this role.</p>
                        </div>
                            <div class="role-img"><img src=""></img></div>
                         <div>
                            <h4 class="title">ROLE EXAMPLE</h4>
                            <p class="name">Full Name</p>
                            <p class="info">Email & Phone #</p>
                            <p class="desc">A short description of the
                            duties & responsibilities of
                            this role.</p>
                        </div>
                            <div class="role-img"><img src=""></img></div>
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