'use client'
import Lottie from "lottie-react";
import animationData from "@/public/lottie/no_button.json";

export const LottieAnim: React.FC = () => {
    return (
    <div className="flex flex-col w-full justify-center items-center bg-[#2c2c2c] rounded py-14 px-8">
        <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
        />
    </div>
    )
}

export default LottieAnim