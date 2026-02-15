
export const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://placehold.co/400x300?text=No+Image";

    // If it's already a full URL (http/https), check if it's localhost
    if (imagePath.startsWith('http')) {
        if (imagePath.includes('localhost:5000')) {
            // Get production API URL from env, remove /api suffix if present to get base URL
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const baseUrl = apiUrl.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;

            return imagePath.replace('http://localhost:5000', baseUrl);
        }
        return imagePath;
    }

    // If it's a relative path (e.g., /uploads/image.jpg), prepend the base URL
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    const baseUrl = apiUrl.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;

    // Ensure we don't end up with double slashes
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

    return `${cleanBase}${cleanPath}`;
};
