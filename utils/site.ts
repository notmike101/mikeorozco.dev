export const siteUrl = 'https://mikeorozco.dev/';
export const siteName = 'Mike Orozco';
export const defaultTitle = 'Mike Orozco — Senior Software Engineer | Frontend Architecture & Developer Tooling';
export const defaultDescription = 'Senior software engineer with 13+ years of web and software development experience in frontend architecture, Vue authoring tools, interactive applications, and developer tooling.';
export const defaultSocialImage = `${siteUrl}images/og-default.png`;

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();
export const caseStudyPath = (slug: string) => `/work/${slug}/`;
