"use client";

import { useState } from "react";

export default function VimeoEmbed({
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
          <p className="eyebrow">Vimeo Teaser</p>
          <h3>{title} ansehen</h3>
          <p>
            Der Teaser kann aufgrund seiner aktuellen Vimeo-Einstellungen
            nicht direkt auf dieser Website eingebettet werden.
          </p>
          <a
            className="button-light"
            href={externalUrl ?? `https://vimeo.com/${videoId}`}
            rel="noreferrer"
            target="_blank"
          >
            Teaser auf Vimeo öffnen ↗
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
          src={`https://player.vimeo.com/video/${videoId}?dnt=1`}
          title={title}
        />
      </div>
    );
  }

  return (
    <div className="video-consent">
      <div>
        <p className="eyebrow">Vimeo Video</p>
        <h3>{title} ansehen</h3>
        <p>
          Beim Laden des Videos werden Daten an Vimeo übertragen. Weitere
          Informationen stehen in der Datenschutzerklärung.
        </p>
        <button className="button-light" onClick={() => setAccepted(true)} type="button">
          Vimeo-Video laden
        </button>
      </div>
    </div>
  );
}
