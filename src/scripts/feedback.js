import Vue from 'vue';

new Vue({
  el: "#feedback",
  template:"#-component",
  data() {
      return {
        feedback: [],
        strafe:0
      };
    },
    methods: {
      arrWithRequiredImages(array) {
        return array.map(item => {
          const requredPic = require(`../images/content/${item["info__ava-img"]}`);
          item["info__ava-img"] = requredPic;
  
          return item;
        });
      },
      
      slide(direction) {
        const slider = this.$refs["feedback-slider"];
        const elemWidth = +slider.getBoundingClientRect().width;
        const oneItemWidth = +slider.firstElementChild.getBoundingClientRect()
            .width;
        const itemsInView = 2;
        const availableWidth =
            oneItemWidth * (slider.children.length - itemsInView);

        switch (direction) {
            case "next":
                if (Math.abs(this.strafe) <= availableWidth) {
                    this.strafe += elemWidth;
                }
                break;
            case "prew":
                if (Math.abs(this.strafe) > 0) {
                    this.strafe -= elemWidth;
                }
                break;
        }

        slider.style.transform = `translateX(-${this.strafe}px)`;
        },
        resetSliderOnResize() {
            const throttledSliderReset = this.debounse(() => {
                const slider = this.$refs["feedback-slider"];
                this.strafe = 0;
                slider.style.transform = "translateX(0)";
            }, 1000);

            window.addEventListener("resize", throttledSliderReset);
        },
        debounse(fn, ms) {
            let timer = null;

            return function (...args) {
                const onComplete = () => {
                    fn.apply(this, args);
                    timer = null;
                };

                if (timer) {
                    clearTimeout(timer);
                }

                timer = setTimeout(onComplete, ms);
            };
        }
    },
    created() {
        const data = require("../data/feedback.json");
        this.feedback = this.arrWithRequiredImages(data);
    },
    mounted() {
        this.resetSliderOnResize();
    }
});

const vue = new Vue();

vue.$mount('#feedback-component');

console.log('I am a feedback module');

