import React, { useState } from 'react';

const ContactCard = ({ icon, title, value, href, onCopy }) => {
  return (
    <div className="level-2 p-6 flex items-start gap-4 hover:border-primary transition-colors duration-300">
      <div className="text-primary mt-1">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>{icon}</span>
      </div>
      <div>
        <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-1">{title}</h4>
        {href ? (
          <a href={href} className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors break-all">
            {value}
          </a>
        ) : (
          <p className="font-body-lg text-body-lg text-on-surface">
            {value}
          </p>
        )}
        {onCopy && (
          <button
            onClick={() => onCopy(value)}
            className="block mt-2 font-label-sm text-label-sm text-primary hover:text-white uppercase tracking-widest"
          >
            [ COPY_DATA ]
          </button>
        )}
      </div>
    </div>
  );
};

const Contact = ({ personalInfo }) => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(text);
          setTimeout(() => setCopied(null), 2000);
        }
      } catch (fallbackErr) {
        console.error('Unable to copy to clipboard', fallbackErr);
      }
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-outline-variant border-dashed relative">
      <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2 mb-12">
        <span>[ COMMS_LINK ]</span>
      </div>

      <div className="level-1 p-4 md:p-12 flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="font-display-md text-display-md text-on-surface mb-6 uppercase">
            Initiate<br />Connection
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            I am currently exploring new opportunities to apply my expertise. Whether you have a project in mind, a question, or simply wish to connect, I welcome your message and look forward to hearing from you.
          </p>
          <a href="/resume.pdf" download="Mustafa_Lokhandwala_Resume.pdf" className="btn-primary inline-block">DOWNLOAD_RESUME</a>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <ContactCard
            icon="mail"
            title="Email"
            value={personalInfo.email}
            href={`mailto:${personalInfo.email}`}
            onCopy={handleCopy}
          />
          {personalInfo.location && (
            <ContactCard
              icon="location_on"
              title="Location"
              value={personalInfo.location}
            />
          )}
          {personalInfo.phone && (
            <ContactCard
              icon="call"
              title="Phone"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone}`}
              onCopy={handleCopy}
            />
          )}
          {personalInfo.linkedin && (
            <ContactCard
              icon="link"
              title="LinkedIn"
              value="mustafa-lokhandwala"
              href={personalInfo.linkedin}
            />
          )}
          {personalInfo.instagram && (
            <ContactCard
              icon="photo_camera"
              title="Instagram"
              value="@mustafa_mtfa"
              href={personalInfo.instagram}
            />
          )}
          {personalInfo.instagramBusiness && (
            <ContactCard
              icon="photo_camera"
              title="Instagram (Made in Flutter)"
              value="@madeinflutter"
              href={personalInfo.instagramBusiness}
            />
          )}
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-black font-label-caps text-label-caps uppercase px-6 py-3 border-2 border-black z-50">
          DATA_COPIED
        </div>
      )}
    </section>
  );
};

export default Contact;