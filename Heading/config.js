export default {
  name: 'Heading',
  icon: 'header',
  config: [{
    prop: 'text',
    label: 'Text',
    type: 'string',
    value: 'Edit this heading',
    placeholder: 'Heading text'
  }, {
    prop: 'type',
    label: 'Heading type',
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
  }]
}