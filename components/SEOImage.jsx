import Image from 'next/image';

const SEOImage = ({
    src,
    alt,
    title,
    width,
    height,
    className = '',
    priority = false,
    loading,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality = 85,
    placeholder = 'blur',
    blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEB' +
    'AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB' +
    'AQEBAQEBAQH/wAALCAABAAEBAREA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAA' +
    'AAAAAAAAAAAAAAAAAA/9oACAEBAAA/AD//2Q==',
    ...props
}) => {
    // Generate SEO-friendly alt text if not provided
    const seoAlt = alt || `Dental care image - ${title || 'Hentges Dental'}`;

    // Generate title from alt text if not provided
    const seoTitle = title || alt || 'Hentges Dental Image';

    // Check if the image is an SVG
    const isSVG = typeof src === 'string' && src.includes('.svg');

    // Handle priority vs loading conflict
    const imageProps = {
        src,
        alt: seoAlt,
        title: seoTitle,
        width,
        height,
        className,
        sizes,
        ...props
    };

    // Only add quality for non-SVG images
    if (!isSVG) {
        imageProps.quality = quality;
        imageProps.placeholder = placeholder;
        imageProps.blurDataURL = blurDataURL;
    }

    // Only set priority OR loading, not both
    if (priority) {
        imageProps.priority = true;
        imageProps.fetchPriority = 'high';
    } else {
        imageProps.loading = loading || 'lazy';
    }

    return <Image {...imageProps} />;
};

export default SEOImage;
