export default {
    name: "Services",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    ` <div id="join">
        <div class="join-container">
                <div class="left">
                    <h2 class="join-head">INTERESTED IN JOINING THE LRG OFFICIATING TEAM?</h2>
                    <h3 class="join-subhead">We just have a few things to ask you first...</h3>
                </div>
                <div class="join-form-container">
                    <form class="join-form">
                        <div class="row">
                            <input type="text" placeholder="First and Last Name"></input>
                            <input type="number" placeholder="Age"></input>
                        </div>
                        <div class="row">
                            <input type="tel" placeholder="Phone Number"></input>
                            <input type="email" placeholder="Email Address"></input>
                        </div>
                        <div class="row">
                            <input type="number" placeholder="Years of Ref Experience"></input>
                            <input type="text" placeholder="League/Association Name"></input>
                        </div>
                        <div class="row">
                            <input class="long" type="text" placeholder="How did you find out about us? (dropdown)"></input>
                        </div>
                        <div class="row">
                            <input class="long" type="text" placeholder="If an existing member referred you, leave their name here..."></input>
                        </div>
                        <div class="row">
                            <textarea class="message" placeholder="If there's anything you would like us to know, leave it here...</textarea>
                        </div>
                        <div class="row">
                            <input type="submit" value="APPLY NOW"></input>
                        </div>
                    </form>
               </div>
                <div class="right">
                    <h3 class="join-subhead">Thank you for your interest!<br>
                    We'll get in touch with you soon.</h3>
                </div>
        </div>
    </div>
    `,

    methods: {
    }

}