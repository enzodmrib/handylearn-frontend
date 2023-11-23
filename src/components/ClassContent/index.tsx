import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useEffect, useRef, useState, useContext } from "react";
import { Button } from "../Button";
import { HiOutlineBookOpen, HiOutlinePencil } from "react-icons/hi2";
import { BiEditAlt } from 'react-icons/bi'
import { useParams } from "next/navigation";
import { Redirect } from "../Redirect";
import YouTubePlayer from "yt-player";
import { RiPauseCircleFill, RiPlayCircleFill } from "react-icons/ri";
import { CourseContext } from "@/app/providers/CourseProvider";
import { RiListCheck } from "react-icons/ri";
interface ClassContentProps {
  contentUrl: string | undefined
  classType: "VIDEO" | "DOCUMENT" | "TEST"
}

export function ClassContent({ contentUrl = "", classType }: ClassContentProps) {
  const params = useParams()
  const { currentTest, userProgressInfo } = useContext(CourseContext)
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  const userFinishedTestIds = userProgressInfo?.finishedTests.map((finishedTest: FinishedTest) => finishedTest.id)

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
    } else if (currentGesture === 'next_gesture') {
      document.getElementById("results-button")?.click()
    }
  }, [currentGesture])

  if(!currentTest) {
    return (
      <p>Teste não encontrado para esse módulo</p>
    )
  }

  if (classType === "VIDEO") {
    return (
      <>
        <div className="player"></div>
        <div className="flex items-center mt-4">
          {isPaused && <Button
            id="content-button"
            className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-2 px-4 rounded-lg"
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
            className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-2 px-4 rounded-lg"
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
        className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-4 px-6 rounded-lg my-4"
        icon={<HiOutlineBookOpen size={32} />}
        gestureBadgeEmoji={"👍"}
        onClick={() => {
          window.open(contentUrl, '_blank')
          setCurrentGesture(null)
        }}
      />
    )
  } else {
    return userFinishedTestIds?.includes(currentTest.id)
      ? (
        <div className="flex items-center gap-8 my-4">
          <Redirect
            id="content-button"
            text={"Refazer teste"}
            href={`/course/${params.courseId}/modules/${params.moduleId}/classes/test`}
            className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-4 px-6 rounded-lg"
            icon={<BiEditAlt size={32} />}
            gestureBadgeEmoji={"👍"}
            onClick={() => {
              setCurrentGesture(null)
            }}
          />

          <Redirect
            id="results-button"
            text={"Ver Resultados"}
            href={`/course/${params.courseId}/modules/${params.moduleId}/classes/results`}
            className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-4 px-6 rounded-lg"
            icon={<RiListCheck size={32} />}
            gestureBadgeEmoji={"👉"}
            onClick={() => {
              setCurrentGesture(null)
            }}
          />
        </div>
      ) : (
        <Redirect
          id="content-button"
          text={"Iniciar teste"}
          href={`/course/${params.courseId}/modules/${params.moduleId}/classes/test`}
          className="font-bold border-2 border-emerald-500 text-emerald-500 flex items-center justify-center gap-2 py-4 px-6 rounded-lg my-4"
          icon={<BiEditAlt size={32} />}
          gestureBadgeEmoji={"👍"}
          onClick={() => {
            setCurrentGesture(null)
          }}
        />
      )
  }
}