import React, { ReactNode } from "react";
import { cn } from "../../../../lib/utils";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      target='_blank' href='https://www.linkedin.com/in/valentinocopperi/' 
      className={cn(
        "group relative flex max-w-fit flex-row items-center justify-center rounded-2xl  px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-all duration-500 cursor-pointer ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] hover:bg-[#2e2e2ef5]  ",
        className,
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffff]/50 via-[#9c40ff]/50 to-[#ffff]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
      <ArrowCircleRightOutlined style={{fontSize:20}} className="ml-1" />
    </a>
  );
}
