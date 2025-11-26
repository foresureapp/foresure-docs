import DefaultTheme from 'vitepress/theme'
import './custom.css'
import AnimatedArchitecture from "../components/AnimatedArchitecture.vue";
import AnimatedTimeline from "../components/AnimatedTimeline.vue";
import 'katex/dist/katex.min.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component("AnimatedArchitecture", AnimatedArchitecture);
        app.component("AnimatedTimeline", AnimatedTimeline);
    },
};
