export default {
    name: "Scheduling",

    props: [""],

    data() {
        return {
        };
    },

     /****** TO-DO *******/
    /* - change the "tutorial" div to include/link to an actual video tutorial */
    
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
                    <router-link to="/join">
                <p>Apply <a href="/" class="apply-link">HERE</a>.</p>
                </router-link>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="members-text">
                <div class="sched-top">
                    <h2 class="members-head">SCHEDULING</h2>
                </div>
                <div class="sched-bottom">
                <p class="sched-text">London Referees Group is proud to work with Horizon Web Ref to bring you a streamlined scheduling platform.</p>
                    <h3>HORIZON WEB REF TUTORIAL (VIDEO)</h3>
                    <div class="tutorial"><img src="../images/horizon-schedule.png">
                    </div>
                    <p>Visit Horizon Web <a href="https://www.horizonwebref.com/" class="register-link">here</a>.</p>
                </div>
            </div>
        </div>
                
    </div>
    `,

    methods: {
    }
}
