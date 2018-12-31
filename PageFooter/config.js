export default {
  name: 'Page Footer',
  icon: 'widget-footer',
  config: [
    {
      prop: 'footerText',
      label: 'Footer text',
      type: 'string',
      value: '© 2019 Codecraftor',
      placeholder: 'Type a footer text'
    },
    {
      prop: 'fontStyle',
      label: 'Font color style',
      type: 'list',
      value: 'light',
      list: [
        {
          name: 'Dark',
          value: 'dark'
        },
        {
          name: 'Light',
          value: 'light'
        }
      ]
    },
    {
      prop: 'backgroundStyle',
      label: 'Background style',
      type: 'list',
      value: 'none',
      list: [
        {
          name: 'None',
          value: 'none'
        },
        {
          name: 'Primary',
          value: 'primary'
        },
        {
          name: 'Secondary',
          value: 'secondary'
        },
        {
          name: 'Tertiary',
          value: 'tertiary'
        },
        {
          name: 'Quaternary',
          value: 'quaternary'
        }
      ]
    }
  ]
};
