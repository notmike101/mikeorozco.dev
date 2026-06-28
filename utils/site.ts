export const siteUrl = 'https://mikeorozco.dev';
export const siteName = 'Mike Orozco';
export const defaultTitle = 'Mike Orozco — Senior Software Engineer & Web Architect';
export const defaultDescription = 'Senior software engineer and web architect designing scalable web platforms, immersive 3D experiences, and secure systems.';
export const defaultSocialImage = `${siteUrl}/images/og-default.png`;

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();
