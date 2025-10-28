import Page, { generateMetadata as baseGenerateMetadata } from '../../../(routes)/sal/page';

export const revalidate = 3600;
export const generateMetadata: typeof baseGenerateMetadata = (
  ...args
) => baseGenerateMetadata(...args);

export default Page;
