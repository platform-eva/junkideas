"use client";

import { useState } from "react";

export default function VimeoEmbed() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="video-frame">
        <iframe
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          src="https://player.vimeo.com/video/835266930?dnt=1"
          title="The Secret of the Charango"
        />
      </div>
    );
  }

  return (
    <div className="video-consent">
      <div>
        <p className="eyebrow">Vimeo Video</p>
        <h3>The Secret of the Charango ansehen</h3>
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
