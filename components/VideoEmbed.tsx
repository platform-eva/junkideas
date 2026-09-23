"use client";

import { useState } from "react";

export default function VideoEmbed({
  embedEnabled = true,
  externalUrl,
  videoId,
  title,
}: {
  embedEnabled?: boolean;
  externalUrl?: string;
  videoId: string;
  title: string;
}) {
  const [accepted, setAccepted] = useState(false);

  if (!embedEnabled) {
    return (
      <div className="video-consent">
        <div>
          <p className="eyebrow">YouTube Teaser</p>
          <h3>{title} ansehen</h3>
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
        <h3>{title} ansehen</h3>
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
