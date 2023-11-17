import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useEffect } from "react";
import { Button } from "../Button";
import { HiOutlineBookOpen, HiOutlinePencil } from "react-icons/hi2";
import { BiEditAlt } from 'react-icons/bi'
import { useParams, useRouter } from "next/navigation";
import { Redirect } from "../Redirect";

interface ClassContentProps {
  contentUrl: string
  classType: "VIDEO" | "DOCUMENT" | "TEST"
}

export function ClassContent({ contentUrl, classType }: ClassContentProps) {
  const router = useRouter()
  const params = useParams()
  const { currentGesture, setCurrentGesture } = useHandDetection()

  useEffect(() => {
    if (currentGesture === "thumbs_up") {
      document.getElementById("content-button")?.click()
    }
  }, [currentGesture])

  console.log({ params })

  if (classType === "VIDEO") {
    return (
      // <iframe
      //   id="video-player"
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //   allowFullScreen
      //   src={contentUrl+'autoplay=1'}
      //   width={720}
      //   height={420}
      // />
      <video
        width={720}
        height={420}
        controls
      >
      </video>
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
        onClick={() => {
          setCurrentGesture(null)
        }}
      />
    )
  }

}