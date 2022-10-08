import { getQueryString } from '@/index';

const Component = () => {
  return <div>123{JSON.stringify(getQueryString())}</div>;
};

export const YourStory = () => <Component />;

export default {
  title: 'Your Stories',
};
