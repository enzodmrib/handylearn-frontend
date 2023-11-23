import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { HiOutlineBookOpen, HiOutlinePencil } from "react-icons/hi2";
import { BiEditAlt } from 'react-icons/bi'
import { useParams, useRouter } from "next/navigation";
import { Redirect } from "../Redirect";
import YouTubePlayer from "yt-player";
import { RiPauseCircleFill, RiPlayCircleFill } from "react-icons/ri";

interface ClassContentProps {
  contentUrl: string | undefined
  classType: "VIDEO" | "DOCUMENT" | "TEST"
}

export function ClassContent({ contentUrl = "", classType }: ClassContentProps) {
  const params = useParams()
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  useEffect(() => {
    if (classType === "VIDEO") {
      document.getElementById("content-button")?.focus()

      const ytPlayer = new YouTubePlayer(".player", {
        autoplay: true
      });
      ytPlayer.load(contentUrl, true)
      setPlayer(ytPlayer)
    }
  }, [])

  useEffect(() => {
    if (classType === "VIDEO") {
      if (player) {
        player.on('playing', () => { setIsPaused(false) })
        player.on('paused', () => { setIsPaused(true) })
      }
    }
  }, [player])

  useEffect(() => {
    if (currentGesture === "thumbs_up") {
      document.getElementById("content-button")?.click()
    }
  }, [currentGesture])

  if (classType === "VIDEO") {
    return (
      <>
        <div className="player"></div>
        <div className="flex items-center mt-8">
          {isPaused && <Button
            id="content-button"
            className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-4 px-6 rounded-lg"
            icon={<RiPlayCircleFill size={32} />}
            gestureBadgeEmoji={"👍"}
            onClick={() => {
              player?.play()
              setCurrentGesture(null)
            }}
            onKeyDown={(event) => {
              if (event.key === ' ') {
                player?.play()
                setHasStartedOnce(true)
              }
            }}
          />}

          {!isPaused && <Button
            id="content-button"
            className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-4 px-6 rounded-lg"
            icon={<RiPauseCircleFill size={32} />}
            gestureBadgeEmoji={"👍"}
            onClick={() => {
              player?.pause()
              setCurrentGesture(null)
            }}
          />}

        </div>
        {!hasStartedOnce && <p className="text-sm font-normal mb-4">{"Caso o video não inicie automaticamente, pressione a tecla \"espaço\" para iniciar o video"}</p>}
      </>
    )
  } else if (classType === "DOCUMENT") {
    return (
      <Button
        id="content-button"
        text={"Acessar material didático"}
        className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-4 px-6 rounded-lg"
        icon={<HiOutlineBookOpen size={32} />}
        gestureBadgeEmoji={"👍"}
        onClick={() => {
          window.open(contentUrl, '_blank')
          setCurrentGesture(null)
        }}
      />
    )
  } else {
    return (
      <Redirect
        id="content-button"
        text={"Iniciar teste"}
        href={`/course/${params.courseId}/modules/${params.moduleId}/classes/test`}
        className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-4 px-6 rounded-lg"
        icon={<BiEditAlt size={32} />}
        gestureBadgeEmoji={"👍"}
        onClick={() => {
          setCurrentGesture(null)
        }}
      />
    )
  }

}