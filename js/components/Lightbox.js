export default {

    name: "Lightbox",

    props: ["contents"],

    data() {
        return {

        };
    },

    template: `
    <div class="lightbox">
    <div class="lb-close"><i @click="closeLightbox" class="fas fa-window-close"></i></div>
    <div class="lb-contents">
        <img src="" class="lb-image">
    </div>
    </div>`,

    computed: {
        imageSource: function() {
            let source = this.info.url;
            return source;
        }
    },

    methods: {

        closeLightbox() {
            debugger;
            document.querySelector(".lightbox").style.opacity = 0;
            setTimeout(function(){ 
                document.querySelector(".lightbox").style.display = "none";
             }, 600);
        }
    }

}