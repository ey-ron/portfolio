import Layout from "@/components/portfolio/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import AnimatedText from "@/components/portfolio/AnimatedText";
import TransitionEffect from "@/components/portfolio/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Aaron Serrano - Professional Journey</title>
        {/* <meta name="description" content="Learn more about CodeBucks, a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development." /> */}
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="A strategist in the"
            className="-mb-4 !text-7xl !leading-tight lg:!text-4xl sm:!text-3xl xs:!text-1xl sm:mb-0"
          />
          <AnimatedText
            text="shell of a coder."
            className="mb-16 !text-7xl !leading-tight lg:!text-4xl sm:!text-3xl xs:!text-1xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                Hi, I&apos;m <strong>Aaron</strong>, a tech enthusiast with a deep passion for innovation and technology.
              </p>
              <p className="my-4 font-medium">
                I am a seasoned Technical Manager with a strong passion for helping organizations align 
                their IT strategies with business objectives. 
                I specialize in leading and optimizing technology departments to drive operational efficiency and innovation.
              </p>
              <p className="my-4 font-medium">
                With a focus on collaboration and long-term value, I support companies in achieving scalable, secure, 
                and forward-thinking tech solutions. My approach combines strategic planning, hands-on leadership, 
                and continuous improvement. I thrive in dynamic environments where technology plays a key role in growth.
              </p>
              {/* <p className="my-4 font-medium md:hidden">
                By leveraging modern tools and methodologies, I guide teams through digital transformation and change management. 
                I believe in building strong partnerships across departments to ensure alignment and impact. 
                My goal is to empower organizations to turn technology into a true business enabler.
              </p> */}
              <p className="my-4 font-medium">
              Whether it's streamlining operations or delivering complex IT projects, I bring a results-driven mindset. 
              Ultimately, I’m committed to helping companies succeed through smart, effective technology leadership.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="aaron"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={70} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  managed individuals
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={10} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
