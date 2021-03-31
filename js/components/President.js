export default {
    name: "President",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    ` <div id="president">
        <div class="left">
            <img src="../images/president.jpg">
        </div>
        <div class="right">
            <div class="president-text">
                <h2 class="president-head">A MESSAGE FROM OUR PRESIDENT...</h2>
                <p class="president-quote">“It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using ‘Content here, content here.</p>
                <p class="insert">“SENTENCE FOR EMPHASIS HERE.”</p>
                <p class="president-quote">Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose. Content content content content content content content content.”</p>
                <p class="president-name">First Lastname,<br>
                London Referees Group President</p>
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