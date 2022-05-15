import { FunctionComponent } from "react";
import Image from "next/image";

export interface ITeammateCardComponentProp {
  src: string;
  name: string;
  position: string;
  index?: number;
}

export const TeammateCardComponent: FunctionComponent<
  ITeammateCardComponentProp
> = ({ src, name, position, index }) => {
  let wrapperStyles = "w-[48%] relative pb-3 sm:w-[30%] lg:pb-8";
  let positionStyles =
    "absolute top-0 right-1 origin-top-left rotate-90 translate-x-full text-base font-medium";

  if (index != null && index % 2 !== 0) {
    wrapperStyles += " pt-12 lg:pt-18";
    positionStyles += " top-12 lg:top-18";
  }

  if (index != null && index >= 3) {
    if (index != null && index % 2 !== 0) {
      wrapperStyles += " sm:pt-0 lg:pt-0";
      positionStyles += " sm:top-0 lg:top-0";
    } else {
      wrapperStyles += " sm:pt-12 lg:pt-18";
      positionStyles += " sm:top-12 lg:top-18";
    }
  }

  return (
    <>
      <div className={wrapperStyles}>
        <div className="w-full pb-3 pr-8">
          <Image
            src={src}
            width={476}
            height={682}
            layout="responsive"
            alt={name}
            priority={index != null && index < 3}
          />
        </div>
        <p className="text-lg font-bold">{name}</p>
        <p className={positionStyles}>{position}</p>
      </div>
    </>
  );
};
