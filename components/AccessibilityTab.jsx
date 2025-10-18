'use client';

import { useState } from 'react';
import Link from 'next/link';

const AccessibilityTab = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Accessibility Tab Button */}
            <div
                className="fixed right-0 top-5/6 transform -translate-y-1/2 z-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="bg-secondary text-primary p-2 rounded-l-lg shadow-lg hover:bg-tertiary transition-all duration-300 flex flex-col items-center gap-1 min-h-[50px] border-l-1 border-t-1 border-b-1 border-primary justify-center cursor-pointer">
                    <div className="flex flex-col items-center gap-1">
                        <div className="mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 483.2226563 551.4306641" className="text-primary">
                                <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M161.9882813,98.1240234  c24.9628906-2.3046875,44.3574219-23.8110352,44.3574219-48.9658203C206.3457031,22.0830078,184.2626953,0,157.1875,0  s-49.1572266,22.0830078-49.1572266,49.1582031c0,8.2568359,2.3037109,16.7055664,6.1445313,23.8105469l17.515625,246.4667969  l180.3964844,0.0488281l73.9912109,173.3652344l97.1445313-38.0976563l-15.0429688-35.8203125l-54.3662109,19.625  l-71.5908203-165.2802734l-167.7294922,1.1269531l-2.3027344-31.2128906l121.4228516,0.0483398v-46.1831055l-126.0546875-0.0493164  L161.9882813,98.1240234z" />
                                <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M343.4199219,451.5908203  c-30.4472656,60.1875-94.1748047,99.8398438-162.1503906,99.8398438C81.4296875,551.4306641,0,470.0009766,0,370.1611328  c0-70.1005859,42.4853516-135.2436523,105.8818359-164.1210938l4.1025391,53.5375977  c-37.4970703,23.628418-60.6123047,66.262207-60.6123047,110.9506836c0,72.4267578,59.0712891,131.4970703,131.4970703,131.4970703  c66.2617188,0,122.7646484-50.8515625,130.4697266-116.0869141L343.4199219,451.5908203z" />
                            </svg>
                        </div>
                        {/* {['A', 'C', 'C', 'E', 'S', 'S', 'I', 'B', 'I', 'L', 'I', 'T', 'Y'].map((letter, index) => (
                            <span key={index} className="font-bold leading-none text-sm">
                                {letter}
                            </span>
                        ))} */}
                    </div>
                </div>
            </div>

            {/* Accessibility Panel */}
            {isHovered && (
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="fixed right-0 top-3/5 scroll-m-4 transform -translate-y-1/2 z-40 bg-white border border-gray-300 rounded-l-lg shadow-xl p-6 w-80 mr-8">

                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-dark mb-4 text-2xl">Accessibility Help</h3>
                            <p className="text-gray-600 mb-4 text-xl">
                                Need help making our website more accessible? We've compiled helpful resources and tools to improve your browsing experience.
                            </p>

                            <Link
                                href="/accessibility"
                                className="w-full bg-tertiary text-white py-3 px-4 rounded-lg hover:bg-secondary transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span className="text-xl text-center">View Accessibility Guide</span>
                            </Link>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <p className="text-gray-600 mb-2 text-xl">
                                Learn about browser settings, screen readers, and other tools to make our website more accessible.
                            </p>
                            <div className="flex items-center gap-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <span className="text-xl">Accessibility Features</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccessibilityTab;
