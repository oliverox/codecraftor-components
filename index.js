import Heading from './Heading/Heading';
import Span from './Span/Span';
import Container from './Container/Container';
import SpinnerOverlay from './SpinnerOverlay/SpinnerOverlay';

const componentModules = { Heading, Span, Container, SpinnerOverlay };
const componentList = Object.keys(componentModules);

export default componentList;
export { componentModules };

// React -> Blueprint Components
// import Heading from './react/blueprint/Heading/Heading';
// import Button from './react/blueprint/Button/Button';

// export { SpinnerOverlay, Heading, Button };
