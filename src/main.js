import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/feedback";
import "./scripts/scroll";
import "./scripts/hamburger";
import "./scripts/works";
import "./scripts/form";
import "./scripts/parallax__bottom";
