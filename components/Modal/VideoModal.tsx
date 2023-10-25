import React, { FC, useState } from "react";
import { Button, Modal } from "flowbite-react";
import useFetchData from "../../hooks/useDataFetch";
import ReactPlayer from "react-player";

type Props = {
  openModal: string | undefined;
  setOpenModal: (v: any) => void;
};

const VideoModal: FC<Props> = ({ openModal, setOpenModal }) => {
  const { data } = useFetchData<any>("/medias?populate=*");
  const [playing, setPlaying] = useState(false);

  return (
    <div className="transition ease-in-out delay-100">
      <Modal
        position="center"
        show={openModal === "form-elements"}
        onClose={() => setOpenModal(undefined)}
        className={`pt-[10%] sm:pt-0`}
      >
        <Modal.Header className="bg-burlywood-100 h-6 "></Modal.Header>
        <Modal.Body>
          {/* <video controls autoPlay className="w-full">
            <source
              src={`${data?.data[0]?.attributes?.video?.data[0]?.attributes?.url}`}
              type="video/mp4"
            ></source>
          </video> */}
          <div className="relative mt-1 h-60 rounded-xl  lg:h-96 xl:h-[450px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=sxFyVfb5RME`}
              className="react-player-large"
              style={{ borderRadius: "16px" }}
              playIcon={<button onClick={() => setPlaying(true)} />}
              controls={true}
              playsinline
              loop
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
              width="100%"
              height="100%"
              playing={playing}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoModal;
