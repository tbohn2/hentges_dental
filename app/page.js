import Image from "next/image";
import crown from "../public/images/crown.png";
import calmWater from "../public/images/calm_water.jpg";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col items-start justify-start w-full">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.6481704760856!2d-111.80604301062473!3d33.425932075436734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba6345c8228bb%3A0x374a353f4672cf6f!2sChristensen%20Family%20Dentistry!5e0!3m2!1sen!2sus!4v1758577250768!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
      <div className="bg-(--primary)">Christensen Family Dentistry</div>
      <div className="bg-(--secondary) text-(--primary) p-3">Christensen Family Dentistry</div>
      <div className="bg-(--tertiary) p-3">Hentges Family Dentistry</div>
    </div>
  );
}
