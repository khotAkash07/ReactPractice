import React from "react";
import whatsappIcon from '../assets/whatsapp.png';

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-24 px-6 flex flex-col items-center text-slate-100"
        >
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-100">
                Get in Touch 📬
            </h2>

            <div className="w-full max-w-6000 flex gap-10">
                {/* LEFT SIDE */}
                <div className="space-y-5 items-start w-170">
                    <InfoCard
                        icon={<MailIcon />}
                        title="Email"
                        value="khotakash5737@gmail.com"
                        href="https://mail.google.com/mail/?view=cm&to=khotakash5737@gmail.com"
                        external

                    />
                    <InfoCard
                        icon={<PhoneIcon />}
                        title="Phone"
                        value="+91 9022425737"
                        href="tel:+919022425737"
                    />
                    <InfoCard
                        icon={<MapPinIcon />}
                        title="Address"
                        value="Narhe, Pune 411041"
                    />
                    <InfoCard
                        icon={<WhatsAppIcon />}
                        title="WhatsApp"
                        value="+91 9022425737"
                        href="https://wa.me/919022425737"
                        external
                    />
                </div>

                {/* RIGHT SIDE */}
                <div className="border w-270 border-slate-700 rounded-lg p-8 bg-slate-900">
                    <form className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 hover:border-cyan-400 hover:scale-105 transition duration-300"
                            />
                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 hover:border-cyan-400 hover:scale-105 transition duration-300"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject *"
                            className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 hover:border-cyan-400 hover:scale-105 transition duration-300"
                        />

                        <textarea
                            rows="5"
                            placeholder="Message *"
                            className="w-full bg-transparent border border-slate-700 rounded px-4 py-3 resize-none hover:border-cyan-400 hover:scale-105 transition duration-300"
                        />

                        <a
                            href="https://wa.me/919022425737"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-10 py-4 bg-cyan-400 text-slate-900 font-bold rounded hover:scale-105 transition duration-300"
                        >
                            <WhatsAppIcon filled />
                            Send Message via WhatsApp
                        </a>
                    </form>
                </div>
            </div>
        </section>
    );
};

// ---------------- INFO CARD (FINAL FIX) ----------------
const InfoCard = ({ icon, title, value, href, external }) => {

    const handleClick = () => {
        if (!href) return;

        if (external) {
            window.open(href, "_blank");
        } else {
            window.location.href = href;
        }
    };

    return (
        <div
            onClick={handleClick}
            className="hover:scale-105 transition duration-300 flex items-center gap-4 border border-slate-700 bg-slate-900/50 rounded-lg p-5 hover:border-cyan-400 cursor-pointer"
        >
            <div className="text-cyan-400 p-3 bg-slate-800 rounded-md">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-slate-100 text-lg">{title}</h4>
                <p className="text-slate-400">{value}</p>
            </div>
        </div>
    );
};

// ---------------- ICONS ----------------
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 8.67A2 2 0 0 1 4.11 2h3" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const WhatsAppIcon = ({ filled }) => (
    <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-5 h-5"
    />
);

export default Contact;
