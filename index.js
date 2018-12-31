import TextConfig from './Text/config';
import ButtonConfig from './Button/config';
import HeadingConfig from './Heading/config';
import PageHeaderConfig from './PageHeader/config';
import PageFooterConfig from './PageFooter/config';
import GenericContainerConfig from './GenericContainer/config';
import SplashConfig from './Splash/config';

const componentList = {
  PageHeader: PageHeaderConfig,
  Splash: SplashConfig,
  Heading: HeadingConfig,
  Button: ButtonConfig,
  Text: TextConfig,
  GenericContainer: GenericContainerConfig,
  PageFooter: PageFooterConfig
};

export default componentList;
