import { lazy, Suspense } from 'react';

import Localization from '@/locale/Localization';

import { useSelector } from 'react-redux';
import { selectAuth } from '@/redux/auth/selectors';
import { AppContextProvider } from '@/context/appContext';
import PageLoader from '@/components/PageLoader';

const AuthRouter = lazy(() => import('@/router/AuthRouter'));
const ErpApp = lazy(() => import('./ErpApp'));

export default function IdurarOs() {
  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn)
    return (
      <Localization>
        <Suspense fallback={<PageLoader />}>
          <AuthRouter />
        </Suspense>
      </Localization>
    );
  else {
    return (
      <Localization>
        <AppContextProvider>
          <Suspense fallback={<PageLoader />}>
            <ErpApp />
          </Suspense>
        </AppContextProvider>
      </Localization>
    );
  }
}
