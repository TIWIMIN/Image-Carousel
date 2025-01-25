import { ImageCarousel } from "./imageCarousel";
import "./styles/cssReset.css";
import "./styles/styles.css";

import one from "./assets/one.jpeg";
import two from "./assets/two.jpeg";
import three from "./assets/three.jpeg";
import four from "./assets/four.jpeg";
import five from "./assets/five.jpeg";

const images = [one, two, three, four, five];

const imageCarousel = new ImageCarousel(...images);
