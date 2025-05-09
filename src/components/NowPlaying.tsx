"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@/once-ui/components";

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
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    fetch("https://lastfm-last-played.biancarosa.com.br/natsoysauce/latest-song")
      .then((res) => res.json())
      .then((json) => {
        const name = json?.track?.name;
        const artist = json?.track?.artist?.["#text"];

        if (!name || name.toLowerCase() === "unavailable") {
          setIsUnavailable(true);
          return;
        }

        setTrack({
          title: name,
          artist: artist ?? "",
        });
      })
      .catch(() => {
        setIsUnavailable(true);
      });
  }, []);

  const spotifySearchUrl = track
    ? `https://open.spotify.com/search/${encodeURIComponent(`${track.title} ${track.artist}`)}`
    : "";

  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-[42rem] w-full text-left px-6 sm:px-0 space-y-5">
        {track ? (
          <Text className="mt-2 text-base font-medium text-zinc-100 dark:text-white">
            🎧{" "}
            <a
              href={spotifySearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:opacity-80 transition"
            >
              {track.title}
            </a>
            {track.artist && (
              <span className="font-normal text-zinc-300"> – {track.artist}</span>
            )}
          </Text>
        ) : isUnavailable ? (
          <Text className="mt-2 text-base italic text-zinc-400 dark:text-zinc-500">
            No recent song played
          </Text>
        ) : null}
      </div>
    </motion.section>
  );
}