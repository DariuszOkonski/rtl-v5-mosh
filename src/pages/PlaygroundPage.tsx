// import ExpandableText from '../components/ExpandableText';
// import SearchBox from '../components/SearchBox';
// import TagList from '../components/TagList';
// import Onboarding from '../components/Onboarding';
// import TermsAndConditions from '../components/TermsAndConditions';

// import { Toaster } from 'react-hot-toast';
// import ToastDemo from '../components/ToastDemo';
import OrderStatusSelector from '../components/OrderStatusSelector';

const PlaygroundPage = () => {
  return <OrderStatusSelector onChange={(value) => console.log(value)} />;
};

export default PlaygroundPage;
