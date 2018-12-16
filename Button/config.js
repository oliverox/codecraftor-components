export default {
  name: 'Button',
  icon: 'widget-button',
  config: [
    {
      prop: 'text',
      label: 'Button text',
      type: 'string',
      value: 'Default button',
      placeholder: 'Text on button'
    },
    {
      prop: 'linkTo',
      label: 'Link to',
      type: 'string',
      value: '',
      placeholder: 'Link to page or url'
    },
    {
      prop: 'useContainerWidth',
      label: 'Use container width',
      type: 'yesno',
      value: false
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
    },
    {
      prop: 'fontStyle',
      label: 'Font style',
      type: 'list',
      value: 'none',
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
      prop: 'size',
      label: 'Padding size (in pixels)',
      type: 'numeric',
      value: 10,
      unit: 'px',
      range: [0, 100]
    },
    // {
    //   prop: 'padding',
    //   label: 'Padding',
    //   type: 'slider',
    //   value: 10,
    //   unit: 'px',
    //   discrete: true,
    //   tmpl: '{{value}}px',
    //   range: [0, 100]
    // }
  ]
};
