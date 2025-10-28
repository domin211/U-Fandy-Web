import Page, { generateMetadata as baseGenerateMetadata, revalidate } from '../../../(routes)/galerie/page';

export { revalidate };
export const generateMetadata: typeof baseGenerateMetadata = (...args) => baseGenerateMetadata(...args);

export default Page;
