"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Text } from "@/once-ui/components";

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TRANSITION_SECTION = {
  duration: 0.5,
  ease: "easeOut",
};

interface TrackInfo {
  title: string;
  artist: string;
}

export default function NowPlaying() {
  const [track, setTrack] = useState<TrackInfo | null>(null);

  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      setTrack({ title: "Unavailable", artist: "" });
    }, 2000); // fallback if fetch takes too long or fails silently

    fetch("https://lastfm-last-played.biancarosa.com.br/natsoysauce/latest-song")
      .then((res) => res.json())
      .then((json) => {
        console.log("Last.fm API response:", json); // dev logging, remove in prod

        const name = json?.track?.name;
        const artistText = json?.track?.artist?.["#text"];

        if (name && artistText) {
          clearTimeout(fallbackTimeout);
          setTrack({ title: name, artist: artistText });
        }
      })
      .catch((err) => {
        console.error("Failed to fetch track:", err);
        setTrack({ title: "Unavailable", artist: "" });
      });

    return () => clearTimeout(fallbackTimeout);
  }, []);

  if (!track) {
    return <Text className="text-base text-zinc-400">Loading...</Text>;
  }

  const spotifySearchUrl = `https://open.spotify.com/search/${encodeURIComponent(
    `${track.title} ${track.artist}`
  )}`;

  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-[42rem] w-full text-left px-6 sm:px-0 space-y-5">
        <Text className="mt-2 text-base font-medium text-zinc-100 dark:text-white">
          🎧{" "}
          {track.title !== "Unavailable" ? (
            <a
              href={spotifySearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:opacity-80 transition"
              aria-label={`Listen to ${track.title} by ${track.artist} on Spotify`}
            >
              {track.title}
            </a>
          ) : (
            <span>{track.title}</span>
          )}
          {track.artist && (
            <span className="font-normal text-zinc-300"> – {track.artist}</span>
          )}
        </Text>
      </div>
    </motion.section>
  );
}