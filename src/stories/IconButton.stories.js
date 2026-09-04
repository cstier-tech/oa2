import IconButton from '../components/controls/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.scss';

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: [
        'sm',
        'default',
        'lg'
      ]
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'default',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'default',
  },
};

export const Info = {
  args: {
    variant: 'info',
    size: 'default',
  },
};
