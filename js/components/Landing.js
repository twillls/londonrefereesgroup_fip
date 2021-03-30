export default {
    name: "Landing",

    props: [""],

    data() {
        return {
        };
    },

    /**** TO-DO ****/
    /* check if login button should go to membership page or if an extra page for login is needed */

    template: 
    ` <div id="landing">
        <div class="landing_text">
            <h1 class="tagline">TAGLINE HERE.</h1>
            <h3 class="subhead">Heading here.</h3>
            <p class="intro">We are an organization of 225 hockey referees serving London and area. 
                If you are currently looking for an organization to referee your hockey league,
                our team would like the opportunity to assist.</p>
            <button @click="setView" class="find">MEMBER LOGIN</button>
        </div>
    </div>
    `,

    computed: {
    },

    components: {

    },

    methods: {
        setView(e) {
            let newView = "members"
            this.$emit("setview", newView);
        },
    }

}