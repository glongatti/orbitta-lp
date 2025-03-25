"use client";

export default function CalendarComponent() {
  return (
    <iframe
      src="https://cal.com/atmos-consultoria/30min"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "600px",
        border: "none",
        borderRadius: "12px",
      }}
      loading="lazy"
      allow="camera; microphone; fullscreen; display-capture; autoplay"
    />
  );
}