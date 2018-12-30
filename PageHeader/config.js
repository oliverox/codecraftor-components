export default {
  name: 'Page Header',
  icon: 'widget-header',
  config: [
    {
      prop: 'showTitle',
      label: 'Show header title',
      type: 'yesno',
      value: true
    },
    {
      prop: 'showNavigationMenu',
      label: 'Show navigation menu',
      type: 'yesno',
      value: true
    },
    {
      prop: 'title',
      label: 'Header title',
      type: 'string',
      value: 'Company Inc.',
      placeholder: 'Your page header title'
    },
    {
      prop: 'fontStyle',
      label: 'Font color style',
      type: 'list',
      value: 'dark',
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
