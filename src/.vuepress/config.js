module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Аппаратное обеспечение вычислительных систем',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Методические указания по дисциплине "Аппаратное обеспечение вычислительных систем"',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/BakasaRus/computer-architecture-course',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Последнее обновление',
    nav: [
      {
        text: 'Методические указания',
        link: '/tasks/',
      },
      {
        text: 'Эмуляторы',
        link: '/emulators/'
      },
    ],
    sidebar: {
      '/tasks': [
        {
          title: 'Методические указания',
          collapsable: false,
          children: [
              '/tasks/',
            {
              title: 'Раздел 1. Базовая ЭВМ',
              collapsable: false,
              children: [
                  '/tasks/theory-1',
                '/tasks/homework-1',
                '/tasks/lab-1',
                '/tasks/lab-2',
                '/tasks/lab-3',
                '/tasks/lab-4',
                '/tasks/homework-2',
              ],
            },
            {
              title: 'Раздел 2. Организация ввода-вывода в базовой ЭВМ',
              collapsable: false,
              children: [],
            },
            {
              title: 'Раздел 3. Микропрограммное устройство управления',
              collapsable: false,
              children: [],
            },
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
