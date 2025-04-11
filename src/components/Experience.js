import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @ {company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full mt-5 md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Vice President"
              company="United Overseas Bank"
              companyLink="https://www.uobgroup.com/uobgroup/default.page"
              time="2023-Present"
              address="Raffles Place, Singapore"
              work="Responsible for overseeing the management and execution of multiple projects from ceonception to completion, prioritizing the delivery of high-quality outputs that adhere to project timelimes."
            />

            <Details
              position="Senior Consultant"
              company="OCBC"
              companyLink="https://www.ocbc.com/group/gateway.page"
              time="2022-2023"
              address="Tampines, Singapore."
              work="Consultant for a team responsible for supporting legacy 
              Trade Finance and SWIFT Alliance bank applications. Developed scripts
              for enhancing the deployment process across the department."
            />

            <Details
              position="Senior Consultant"
              company="United Overseas Bank"
              companyLink="https://www.uobgroup.com/uobgroup/default.page"
              time="2019-2022"
              address="Raffles Place, Singapore."
              work="Consultant for a multi-million Trade Transformation Program responsible for building a
              replacement of a legacy Trade Finance application."
            />

            <Details
              position="Application Developer"
              company="United Overseas Bank"
              companyLink="https://www.uobgroup.com/uobgroup/default.page"
              time="2018-2019"
              address="Alexandra Road, Singapore."
              work="Worked on a team responsible for developing new features for
              a legacy Trade Finance Application (FITAS)."
            />

            <Details
              position="Analyst Programmer"
              company="United Overseas Bank"
              companyLink="https://www.uobgroup.com/uobgroup/default.page"
              time="2015-2018"
              address="Alexandra Road, Singapore."
              work="Worked on a team responsible for developing new features for
              a legacy Trade Finance Application (FITAS)."
            />

            <Details
              position="Software Engineer"
              company="Accenture"
              companyLink="https://www.uobgroup.com/uobgroup/default.page"
              time="2012-2015"
              address="Eastwood City, Philippines"
              work="Worked on a team responsible for supporting and developing 
              change requests, enhancements and projects for Caterpillar client."
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
