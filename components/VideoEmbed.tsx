"use client";

import { useState } from "react";

function TextPair({ de, en }: { de: string; en?: string }) {
  if (!en || en === de) {
    return de;
  }

  return (
    <>
      <span className="lang-de">{de}</span>
      <span className="lang-en">{en}</span>
    </>
  );
}

export default function VideoEmbed({
  embedEnabled = true,
  externalUrl,
  headingEn,
  videoId,
  title,
}: {
  embedEnabled?: boolean;
  externalUrl?: string;
  headingEn?: string;
  videoId: string;
  title: string;
}) {
  const [accepted, setAccepted] = useState(false);

  if (!embedEnabled) {
    return (
      <div className="video-consent">
        <div>
          <p className="eyebrow">YouTube Teaser</p>
          <h3><TextPair de={`${title} ansehen`} en={headingEn} /></h3>
          <p>
            Der Teaser ist auf YouTube abrufbar. Beim Öffnen werden Daten an
            YouTube übertragen.
          </p>
          <a
            className="button-light"
            href={externalUrl ?? `https://youtu.be/${videoId}`}
            rel="noreferrer"
            target="_blank"
          >
            Teaser bei YouTube öffnen ↗
          </a>
        </div>
      </div>
    );
  }

  if (accepted) {
    return (
      <div className="video-frame">
        <iframe
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
        />
      </div>
    );
  }

  return (
    <div className="video-consent">
      <div>
        <p className="eyebrow">YouTube Video</p>
        <h3><TextPair de={`${title} ansehen`} en={headingEn} /></h3>
        <p>
          Beim Laden des Videos werden Daten an YouTube übertragen. Weitere
          Informationen stehen in der Datenschutzerklärung.
        </p>
        <button className="button-light" onClick={() => setAccepted(true)} type="button">
          YouTube-Video laden
        </button>
      </div>
    </div>
  );
}
