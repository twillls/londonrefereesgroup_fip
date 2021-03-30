export default {
    props: ["info"],

    data() {
        return {
            newinfo: this.info,

        };
    },

    template: `
    <div class="signal">
        <div class="wrapper">
            <div @mouseover="showDesc" @mouseleave="hideDesc" class="signal-desc">
                <div class="full-icon"><i @click="expandImage" class="fas fa-expand-arrows-alt"></i></div>
                <p class="signal-name">{{this.info.name}}</p>
                <p class="signal-text">{{this.info.desc}}</p>
            </div>
            <div class="signal-image">
                <img :src="imageSource">
            </div>
        </div>
    </div>`,

    computed: {
        imageSource: function() {
            let source = `../images/${this.info.url}.jpg`
            return source;
        }
    },

    methods: {
        showDesc() {
            let desc = document.querySelector(".signal-desc");
            desc.style.opacity = 1;
        },

        hideDesc() {
            let desc = document.querySelector(".signal-desc");
            desc.style.opacity = 0;
        },

        expandImage() {
            document.querySelector(".lightbox").style.opacity = 0;
            document.querySelector(".lightbox").style.display = "block";
            setTimeout(function(){ 
                document.querySelector(".lightbox").style.opacity = 1;
             }, 100);
             this.$emit("lbcontents", this.info.url);
        }
    }

}