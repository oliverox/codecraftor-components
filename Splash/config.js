export default {
  name: 'Marketing Splash',
  icon: 'media',
  config: [
    {
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
    },
    {
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
    },
    {
      prop: 'height',
      label: 'Height (px)',
      type: 'numeric',
      value: 300,
      unit: 'px'
    },
    {
      prop: 'showSplashImage',
      label: 'Show splash image',
      type: 'yesno',
      value: true
    },
    {
      prop: 'splashImageUrl',
      label: 'Splash image url',
      type: 'string',
      value: 'https://i.ibb.co/ckPrbQy/max-1053152-unsplash.jpg',
      placeholder: 'https://'
    },
    {
      prop: 'marketingLineOne',
      label: 'Marketing line #1',
      type: 'string',
      value: 'A learning farm',
      placeholder: 'Type a marketing message'
    },
    {
      prop: 'marketingLineTwo',
      label: 'Marketing line #2',
      type: 'string',
      value: 'We use agriculture to nourish brains and bellies',
      placeholder: 'Type a second marketing message'
    },
    {
      prop: 'lineOneFontStyle',
      label: 'Marketing #1 font style',
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
      prop: 'lineOneShadow',
      label: 'Marketing #1 shadow',
      type: 'yesno',
      value: true
    },
    {
      prop: 'lineTwoFontStyle',
      label: 'Marketing #2 font style',
      type: 'list',
      value: 'quaternary',
      list: [
        {
          name: 'Dark',
          value: 'dark'
        },
        {
          name: 'Light',
          value: 'light'
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
      prop: 'lineTwoShadow',
      label: 'Marketing #2 shadow',
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
    }
  ]
};
