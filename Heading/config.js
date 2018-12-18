export default {
  name: 'Heading',
  icon: 'header',
  config: [{
    prop: 'text',
    label: 'Text',
    type: 'string',
    value: 'Edit this heading text',
    placeholder: 'Heading text'
  }, {
    prop: 'type',
    label: 'Heading element',
    type: 'list',
    list: [{
      name: 'H1',
      value: 'h1'
    }, {
      name: 'H2',
      value: 'h2'
    }, {
      name: 'H3',
      value: 'h3'
    }, {
      name: 'H4',
      value: 'h4'
    }, {
      name: 'H5',
      value: 'h5'
    }, {
      name: 'H6',
      value: 'h6'
    }]
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