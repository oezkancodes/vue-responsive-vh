// Classes for Directives
import './main.scss';

const Plugin = {
  install(Vue) {
    // v-min-height-screen Directive
    Vue.directive('min-h-screen', {
      bind(el) {
        el.classList.add('min-h-screen');
      },
    });

    // v-height-screen Directive
    Vue.directive('h-screen', {
      bind(el) {
        el.classList.add('h-screen');
      },
    });

    // Mixin
    Vue.mixin({
      mounted() {
        // Initial Resize
        this.setVh();
        // Resize Listener
        window.addEventListener('resize', this.setVh);
      },

      beforeDestroy() {
        // Remove Listener
        window.removeEventListener('resize', this.setVh);
      },

      methods: {
        setVh() {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty(
            '--vh',
            `${vh}px`
          );
        },
      },
    });
  },
};

export default Plugin;
