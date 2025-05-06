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

export default function NowPlaying() {
  const [track, setTrack] = useState<{ title: string; artist: string } | null>(null);

  useEffect(() => {
    fetch("https://lastfm-last-played.biancarosa.com.br/natsoysauce/latest-song")
      .then((res) => res.json())
      .then((json) => {
        const { name, artist } = json.track;
        setTrack({
          title: name,
          artist: artist["#text"],
        });
      })
      .catch(() => {
        setTrack({ title: "Unavailable", artist: "" });
      });
  }, []);

  return (
    <motion.section
    variants={VARIANTS_SECTION}
    transition={TRANSITION_SECTION}
    initial="hidden"
    animate="show"
    >
    <div className="max-w-[42rem] w-full text-left px-6 sm:px-0 space-y-5">

    <Text className="mt-2 text-base font-medium text-zinc-100 dark:text-white">
        🎧 <strong>{track?.title}</strong>
        {track?.artist && (
        <span className="font-normal text-zinc-300"> – {track.artist}</span>
        )}
    </Text>
    </div>
    </motion.section>
  );
}