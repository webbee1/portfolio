import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashOffset / 100) * (100 - this.skillPercents);

      circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-component",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../data/skills.json");
    this.skills = data;
  },
  template: "#skills-list"
});
