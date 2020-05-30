const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: {
    tailwindcss,
    autoprefixer,
    'vue-cli-plugin-tailwind-setup/purgecss': {}
  }
}
