module.exports = {
  head: [
    ['meta', { name: 'theme-color', content: '#0B68FE' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  locales: {
    '/': {
      lang: 'ru-RU',
      title: 'Аппаратное обеспечение вычислительных систем',
      description: 'Методические указания по дисциплине "Аппаратное обеспечение вычислительных систем"'
    },
  },
  themeConfig: {
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
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
