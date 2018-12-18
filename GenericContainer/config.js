export default {
  name: 'Generic container',
  icon: 'control',
  config: [{
    prop: 'hAlign',
    label: 'Horizontal content alignment',
    type: 'list',
    value: 'left',
    list: [
      {
        name: 'Left',
        value: 'left'
      },
      {
        name: 'Center',
        value: 'center'
      },
      {
        name: 'Right',
        value: 'right'
      }
    ]
  }, {
    prop: 'vAlign',
    label: 'Vertical content alignment',
    type: 'list',
    value: 'top',
    list: [
      {
        name: 'Top',
        value: 'top'
      },
      {
        name: 'Center',
        value: 'center'
      },
      {
        name: 'Bottom',
        value: 'bottom'
      }
    ]
  }, {
    prop: 'height',
    label: 'Height (px)',
    type: 'numeric',
    value: 100,
    unit: 'px'
  }, {
    prop: 'padding',
    label: 'Padding around content (px)',
    type: 'numeric',
    value: 0,
    unit: 'px'
  }, {
    prop: 'backgroundColor',
    label: 'Background color',
    type: 'color',
    value: 'transparent',
  }]
}