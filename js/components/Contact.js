export default {
    name: "Contact",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    ` <div id="contact">
        <div class="left">
            <div class="contact-form-container">
                <form class="contact-form">
                    <div class="row">
                        <input type="text" placeholder="First and Last Name"></input>
                        <input type="email" placeholder="Email Address"></input>
                    </div>
                    <div class="row">
                        <input type="tel" placeholder="Phone Number"></input>
                        <input type="text" placeholder="Subject"></input>
                    </div>
                    <div class="row">
                        <textarea cols="10" class="message" placeholder="If you have a message for us, please put it here... (questions, comments, etc.)"></textarea>
                    </div>
                    <div class="row">
                        <input type="submit" value="SEND" class="submit"></input>
                    </div>
                </form>
            </div>
        </div>
        <div class="right">
                <div class="contact-text">
                <h2 class="contact-head">CONTACT US</h2>
                    <div class="contact-info">
                        <div class="symbols">
                            <i class="fas fa-envelope"></i>
                            <i class="fas fa-phone"></i>
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="middle">
                            <div class="line"></div>
                        </div>
                        <div class="info">
                            <div>
                                <p class="title">EMAIL</p>
                                <p class="desc">example@email.com</p>
                            </div>
                            <div>
                                <p class="title">PHONE</p>
                                <p class="desc">(519) 555-5555</p>
                            </div>
                            <div>
                                <p class="title">ADDRESS</p>
                                <p class="desc">555 Address Line 1<br>
                                Address Line 2<br>
                                London, ON, Canada<br>
                                N5Y5L5</p>
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