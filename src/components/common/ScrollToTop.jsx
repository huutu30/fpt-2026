import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const wasLocal = prevPath.current.startsWith('/lap-internet-wifi/');
    const isLocal = pathname.startsWith('/lap-internet-wifi/');

    // Không scroll khi chuyển giữa các trang local (giữ nguyên scroll position)
    if (wasLocal && isLocal) {
      prevPath.current = pathname;
      return;
    }

    // Cuộn lên đầu trang khi chuyển route khác
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    prevPath.current = pathname;
  }, [pathname]);

  return null;
}
