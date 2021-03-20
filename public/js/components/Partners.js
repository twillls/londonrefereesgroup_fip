export default {
    name: "Partners",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    ` <div id="partners">
        <div class="left">
            <div class="partner-display">
                <div class="partner-logo-big"><img src="../images/hockey-canada.png">
                </div>
                <div class="partner-info">
                    <div>
                        <h4 class="partner-name">PARTNER NAME</h4>
                        <p class="partner-desc">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.</p>
                        <p class="partner-date"><b>Partner since:</b> 19XX</p>
                    </div>
                    <div class="visit-website">
                        <button class="website-button">VISIT WEBSITE</button>
                    </div>
                </div>
            </div>
            <div class="become">
                <h3 class="become-head">WANT TO BECOME A PARTNER?</h3>
                <p><b>Email us!</b></p>
                <p>example@email.com</p>
            </div>
        </div>
        <div class="right">
            <div class="row">
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
            </div>
            <div class="row">
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
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