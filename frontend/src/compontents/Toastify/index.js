import { toast } from 'react-toastify';

export const toastMessage = (type, label) => {
  switch (type) {
    case 'success': {
      toast.success(label, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 800,
      });
      break;
    }
    case 'error': {
      toast.error(label, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 800,
      });
      break;
    }
    case 'warn': {
      toast.warn(label, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 800,
      });
      break;
    }
    case 'info': {
      toast.info(label, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 800,
      });
      break;
    }
    default:
      break;
  }
};
