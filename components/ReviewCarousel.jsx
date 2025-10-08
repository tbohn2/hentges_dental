"use client";

import { useState, useEffect } from "react";

export default function ReviewCarousel({ reviews }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, reviews.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
        setIsAutoPlaying(false);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
        setIsAutoPlaying(false);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    return (
        <div className="relative w-3/4 mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-tertiary shadow-2xl">
                <div className="relative min-h-140 flex items-center justify-center p-8">
                    <div className="text-center">
                        <div className="flex justify-center my-6">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="#FFD700"
                                    viewBox="0 0 24 24"
                                    className="inline-block mx-1"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>

                        <blockquote className="text-center text-2xl md:text-2xl font-semibold text-primary mb-6 px-20 leading-relaxed">
                            "{reviews[currentIndex].review}"
                        </blockquote>

                        <cite className="text-xl font-bold text-primary">
                            — {reviews[currentIndex].name}
                        </cite>
                    </div>
                </div>

                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-80 hover:bg-opacity-100 text-tertiary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Previous review"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-80 hover:bg-opacity-100 text-tertiary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Next review"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                    </svg>
                </button>

                <button
                    onClick={toggleAutoPlay}
                    className="absolute top-4 right-4 bg-primary bg-opacity-80 hover:bg-opacity-100 text-tertiary p-2 rounded-full shadow-lg transition-all duration-300"
                    aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
                >
                    {isAutoPlaying ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-tertiary scale-125'
                            : 'bg-tertiary bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        aria-label={`Go to review ${index + 1}`}
                    />
                ))}
            </div>

            <div className="text-center mt-4">
                <span className="text-lg font-semibold text-tertiary">
                    {currentIndex + 1} of {reviews.length}
                </span>
            </div>
        </div>
    );
}
