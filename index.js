import Heading from './Heading/Heading';
import Text from './Text/Text';
import RootContainer from './RootContainer/RootContainer';
import GenericContainer from './GenericContainer/GenericContainer';

const modules = { Heading, Text, GenericContainer, RootContainer };

const componentList = {
  GenericContainer: {
    name: 'Generic container',
    icon: 'control',
    config: [{
      prop: 'active',
      label: 'Active',
      type: 'boolean',
      value: false,
    }]
  },
  Button: {
    name: 'Button',
    icon: 'widget-button',
    config: [{
      prop: 'text',
      label: 'Text',
      type: 'string',
      value: '',
      placeholder: 'Text on button'
    }, {
      prop: 'linkTo',
      label: 'Link to',
      type: 'string',
      value: '',
      placeholder: 'Link to page or url'
    }, {
      prop: 'useContainerWidth',
      label: 'Use container width',
      type: 'yesno',
      value: false,
    }, {
      prop: 'style',
      label: 'Style',
      type: 'list',
      value: 'none',
      list: [{
        name: 'None',
        value: 'none'
      }, {
        name: 'Primary',
        value: 'primary'
      }, {
        name: 'Secondary',
        value: 'secondary'
      }]
    }]
  },
  PageHeader: {
    name: 'Page Header',
    icon: 'widget-header'
  },
  Heading: {
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
      label: 'Type',
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
  },
  Image: {
    name: 'Image',
    icon: 'media'
  },
  Text: {
    name: 'Text',
    icon: 'font'
  },
  Paragraph: {
    name: 'Paragraph',
    icon: 'paragraph'
  }
};

export default componentList;
export { modules };
