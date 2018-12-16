import ButtonConfig from './Button/config';
import HeadingConfig from './Heading/config';
import GenericContainerConfig from './GenericContainer/config';

const componentList = {
  GenericContainer: GenericContainerConfig,
  Button: ButtonConfig,
  PageHeader: {
    name: 'Page Header',
    icon: 'widget-header'
  },
  Heading: HeadingConfig,
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
