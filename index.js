import TextConfig from './Text/config';
import ButtonConfig from './Button/config';
import HeadingConfig from './Heading/config';
import GenericContainerConfig from './GenericContainer/config';

const componentList = {
  GenericContainer: GenericContainerConfig,
  Heading: HeadingConfig,
  Button: ButtonConfig,
  Text: TextConfig,
  // PageHeader: {
  //   name: 'Page Header',
  //   icon: 'widget-header'
  // },
  // Image: {
  //   name: 'Image',
  //   icon: 'media'
  // },
  // Paragraph: {
  //   name: 'Paragraph',
  //   icon: 'paragraph'
  // }
};

export default componentList;
