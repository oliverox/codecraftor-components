export default {
  name: 'Text',
  icon: 'font',
  config: [{
    prop: 'content',
    label: 'Content',
    type: 'string',
    value: '',
    placeholder: 'Edit this text...'
  }, {
    prop: 'size',
    label: 'Font size',
    type: 'numeric',
    value: 16,
    unit: 'px'
  }, {
    prop: 'colorStyle',
    label: 'Color style',
    type: 'list',
    list: [{
      name: 'Dark',
      value: 'dark'
    }, {
      name: 'Light',
      value: 'light'
    }, {
      name: 'Primary',
      value: 'primary'
    }, {
      name: 'Secondary',
      value: 'secondary'
    }, {
      name: 'Tertiary',
      value: 'tertiary'
    }, {
      name: 'Quaternary',
      value: 'quaternary'
    }]
  }]
}