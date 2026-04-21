/**
 * Optimizes Cloudinary URLs by adding quality and format transformations.
 * Injects 'q_100,f_auto' into the URL path.
 */
export const optimizeCloudinary = (url: string): string => {
  if (!url || !url.includes("res.cloudinary.com")) return url;

  // Check if it's already optimized or has transformations
  if (url.includes("/upload/q_") || url.includes("/upload/f_")) return url;

  // Inject transformation after '/upload/'
  const partToMatch = "/upload/";
  const index = url.indexOf(partToMatch);

  if (index !== -1) {
    const insertionPoint = index + partToMatch.length;
    return `${url.slice(0, insertionPoint)}q_100,f_auto/${url.slice(insertionPoint)}`;
  }

  return url;
};
