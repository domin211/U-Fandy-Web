export { generateMetadata, viewport } from '../layout';

import type { ReactNode } from 'react';

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
