import ContentDisplay from "../../components/ContentDisplay";

export const metadata = {
    title: "Accessibility Information | Hentges Dental | Mesa, AZ",
    description: "Learn about accessibility features and tools to help make your browsing experience more accessible on our dental website.",
};

const title = "Accessibility Information";

const content = [
    {
        heading: 'Making Our Website Accessible',
        text: ["At Hentges Dental, we are committed to providing an accessible website experience for all our patients. We continuously work to improve the accessibility of our content and want to help you optimize your browsing experience."]
    },
    {
        heading: 'Visual Accessibility Tools',
        text: [
            "If you have difficulty seeing web pages, here are some helpful resources to improve your online experience:",
            <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://www.accessibility-developer-guide.com/knowledge/keyboard-only/browsing-websites/" target="_blank" className="text-tertiary hover:underline">Keyboard navigation guide for web browsing</a></li>
                <li><a href="https://www.health.ny.gov/help/text_size.htm" target="_blank" className="text-tertiary hover:underline">How to increase text size in your browser</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198" target="_blank" className="text-tertiary hover:underline">Screen magnification for Windows users</a></li>
                <li><a href="https://appleinsider.com/articles/21/06/27/how-to-magnify-your-screen-with-the-zoom-feature-in-macos" target="_blank" className="text-tertiary hover:underline">Screen magnification for Mac users</a></li>
                <li><a href="https://www.w3.org/WAI/meta/customize/#other-text-and-color-changes" target="_blank" className="text-tertiary hover:underline">Customizing background and text colors</a></li>
                <li><a href="https://support.microsoft.com/en-us/windows/make-the-mouse-easier-to-use-73c2eeb0-a261-3da0-4480-b560df531df7" target="_blank" className="text-tertiary hover:underline">Making your mouse pointer more visible (Windows)</a></li>
                <li><a href="https://support.apple.com/en-asia/guide/mac-help/mchlp2920/mac" target="_blank" className="text-tertiary hover:underline">Making your mouse pointer more visible (Mac)</a></li>
            </ul>
        ]
    },
    {
        heading: 'Voice Recognition Software',
        text: [
            "For users seeking alternatives to traditional mouse and keyboard navigation, voice recognition software can be incredibly helpful. Programs like Dragon Naturally Speaking allow you to navigate web pages and applications using voice commands, making it easier to interact with our website and online services."
        ]
    },
    {
        heading: 'Screen Reading Software',
        text: [
            "If you are visually impaired, screen reading software can help by reading website content aloud. Here are some popular options:",
            <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en" target="_blank" className="text-tertiary hover:underline">ChromeVox</a> - A free screen reader extension for Chrome browser</li>
                <li>Built-in screen readers that work with your computer's operating system for comprehensive coverage beyond web browsing</li>
            </ul>
        ]
    },
    {
        heading: 'Video Accessibility Features',
        text: [
            "We strive to make our video content accessible to everyone:",
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Closed Captioning:</strong> Most of our video content includes captions that provide synchronized transcripts of the audio track. This benefits users who are deaf or hard of hearing, as well as anyone in noisy environments. <a href="https://support.google.com/youtube/answer/100078?hl=en" target="_blank" className="text-tertiary hover:underline">Learn how to enable captions on YouTube</a></li>
                <li><strong>Volume Controls:</strong> Your device has built-in volume controls, and each video player has additional volume settings. Adjust both your device's volume and the media player's volume for the best listening experience.</li>
            </ul>
        ]
    },
    {
        heading: 'Need Additional Help?',
        text: [
            "If the accessibility tools and resources above don't meet your specific needs, please don't hesitate to contact us. Our team is here to help ensure you can access all the information you need about our dental services.",
            <p className="mt-4">
                <strong>Contact us:</strong> <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>
            </p>
        ]
    }
];

export default function Accessibility() {
    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}
