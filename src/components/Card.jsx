import React from "react";
import { motion } from "framer-motion"
import { CgLoadbarDoc } from "react-icons/cg";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { TbCloudDownload } from "react-icons/tb";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
const Card = ({card, refe}) => {
  return (
    <motion.div drag dragConstraints={refe} whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }} className="relative w-60 h-72 rounded-[20px] px-3.5  bg-emerald-200/60 overflow-hidden shadow-lg">
      <TfiLayoutLineSolid className="text-3xl cursor-grab m-auto opacity-55" />
      <CgLoadbarDoc className="text-xl" />
      <p className="text-[13px] font-sans font-[500] mt-2">{card.description}</p>
      <footer className="footer absolute bottom-0 w-full left-0">
        <div className="flex justify-between items-center mb-3 px-3">
          <h5>{card.fileSize}</h5>
          <span className="w-6 h-6 bg-emerald-300 rounded-full flex justify-center items-center cursor-pointer">
            {card.noDownload ?(<TbCloudDownload className="text-[14px]" />): (<HiOutlineSpeakerWave className="text-[14px]" />)}
          </span>
        </div>
         {card.tag.isOpen && (<div className={card.tag.tagColor === "blue" ? ("tag w-full py-3 bg-sky-700 text-white flex justify-center items-center cursor-pointer") : ("tag w-full py-3 bg-emerald-700 text-white flex justify-center items-center cursor-pointer")}>
          <h3>{card.tag.tagTitle}</h3>
        </div>)}
      </footer>
    </motion.div>
  );
};

export default Card;
