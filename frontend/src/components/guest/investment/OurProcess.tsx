import Image from "next/image";
import React from "react";

const OurProcess = () => {
  return (
    <main className="relative mt-12 flex w-full flex-col justify-between gap-6 bg-darkgreen px-4 py-12 md:mt-28 md:flex-row md:px-6 lg:mb-20 lg:px-12">
      <div className="flex flex-col gap-10 lg:w-[30%]">
        <h1 className="text-3xl font-semibold text-lightgreen md:text-4xl">
          Our Process
        </h1>
        <ul className="flex list-none flex-col gap-7">
          <li className="flex items-start gap-4">
            <h5 className="mt-1 flex items-center justify-center bg-lightgreen px-4 py-3 font-bold text-darkgreen">
              1
            </h5>
            <p className="text-base text-gray-200">
              Connect wallet: Start by connecting your digital wallet to
              AgroVest. This step ensures secure transactions and seamless
              interaction with the platform, allowing you to manage investments
              and access features easily.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <h5 className="mt-1 flex items-center justify-center bg-lightgreen px-4 py-3 font-bold text-darkgreen">
              2
            </h5>
            <p className="text-base text-gray-200">
              Browse Opportunities: Explore a diverse selection of agricultural
              projects on AgroVest. From innovative agri-tech ventures to
              sustainable farming initiatives, our platform offers carefully
              vetted opportunities that align with your investment goals.{" "}
            </p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col justify-center gap-10 lg:w-[30%]">
        <ul className="flex list-none flex-col gap-7">
          <li className="flex items-start gap-4">
            <h5 className="mt-1 flex items-center justify-center bg-lightgreen px-4 py-3 font-bold text-darkgreen">
              3
            </h5>
            <p className="text-base text-gray-200">
              Invest: Once you've found a project that resonates with you, dive
              into the details. Review the business plan, assess potential
              returns, and confidently make your investment. AgroVest makes it
              simple to support the ventures you believe in.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <h5 className="mt-1 flex items-center justify-center bg-lightgreen px-4 py-3 font-bold text-darkgreen">
              4
            </h5>
            <p className="text-base text-gray-200">
              Monitor & Grow: After investing, keep an eye on your portfolio
              with AgroVest's tracking tools. Monitor the progress of your
              investments and enjoy the growth as the projects you've supported
              thrive.{" "}
            </p>
          </li>
        </ul>
      </div>

      {/* mockup */}
      <div className="absolute -top-16 left-1/2 hidden w-[143px] -translate-x-1/2 lg:block lg:w-[313px]">
        <Image
          src={`https://res.cloudinary.com/dad1drjht/image/upload/v1725004222/elliizudku0gxtdcbtrz.png`}
          className="w-full"
          alt="heroBg"
          width={413}
          height={818}
          quality={100}
          priority
        />
      </div>
    </main>
  );
};

export default OurProcess;
