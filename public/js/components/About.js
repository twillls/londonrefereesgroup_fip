export default {
    name: "About",

    props: [""],

    data() {
        return {
        };
    },

    template: 
    ` <div id="about">
        <div class="left">
            
            <div class="lrg">LRG</div>
            <div class="about-text">
                <h1 class="about-head">HEADING</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec consectetur est ac justo viverra volutpat. Nulla in
                rutrum lacus. Mauris et ante mollis, porttitor odio vitae,
                imperdiet est. Donec condimentum ullamcorper dui, nec
                lobortis libero. Cras vestibulum diam felis, sed consectetur
                eros rutrum in. Donec magna diam, scelerisque nec est
                nec, rhoncus cursus orci. Cras in feugiat enim. Nunc vestibulum
                ut arcu sit amet facilisis. Sed ante lorem, pellentesque
                non fringilla non, congue dapibus libero.</p>
                <h4 class="about-head2">HEADING 2 HEADING 2</h4>
                <p>Curabitur dapibus turpis nec malesuada tristique. Quisque
                efficitur sed diam in elementum. Duis commodo eu enim
                et egestas.</p>
                <button @click="setView" class="story-button">Learn More</button>

            </div>

        </div>
        <div class="right">
            <div class="intro-vid"><img class="temp-thumb" src="./images/thumb.png"></div>
               
            <div class="about-text">
                <h4 class="about-head2">SUBHEADING HERE.</h4>
                <p>More copy here. Maybe a paragaph outlining what’s on
                the website, ie. services, training programs, booking a ref,
                etc....</p>
            </div>
        </div>
    </div>
    `,

    methods: {
        setView() {
            let newView = "story";
            this.$emit("setview", newView);
        },
    }

}