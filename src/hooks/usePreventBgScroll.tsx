// to prevent scrolling when the modal is active
import { useEffect } from 'react';
import { useAppSelector } from '../redux/storeConfig';

export const usePreventBackgroundScroll = () => {
  const { isModalOpen } = useAppSelector((state) => state.modal);

  useEffect(() => {
    if (isModalOpen) {
      // Prevent scrolling on the background
      document.body.style.overflow = 'hidden';
      
      // Optionally, prevent scrolling on the html element for more comprehensive coverage
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restore scrolling when modal closes
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup function to ensure scrolling is restored
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isModalOpen]);
};