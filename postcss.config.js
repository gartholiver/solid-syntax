const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    (env === 'production' || env === 'prod-nopurge') ? require('autoprefixer') : false,
    (env === 'production' || env === 'prod-nopurge') ? require('cssnano') : false,
    env === 'production' ? new purgecss({
      content: [
        './templates/**/*.twig',
        './inc/theme/filters.php',
        './inc/theme/functions.php'
      ],
      defaultExtractor: (content) => {
        return content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      },
    }) : false
  ]
})