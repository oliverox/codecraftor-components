import Heading from './Heading/Heading';
import Span from './Span/Span';
import Container from './Container/Container';

const modules = { Heading, Span, Container };

const componentList = {
  Container: {
    name: 'Generic container',
    icon: 'control'
  }, 
  Button: {
    name: 'Button',
    icon: 'widget-button'
  },
  PageHeader: {
    name: 'Page Header',
    icon: 'widget-header'
  },
  Heading: {
    name: 'Heading',
    icon: 'header'
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
