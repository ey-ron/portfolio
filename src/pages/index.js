import AnimatedText from "@/components/portfolio/AnimatedText";
import { LinkArrow } from "@/components/portfolio/Icons";
import Layout from "@/components/portfolio/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/portfolio/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aaron Serrano - Personal Page</title>
        <meta
          name="description"
          content="Aaron Serrano - Technology Expert & Strategist"
        />
      </Head>

      <TransitionEffect />
      <article
        className="flex min-h-auto items-center text-dark dark:text-light sm:items-start"
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Aaron Serrano"
                className="h-auto w-4/5 md:w-5/6 md:mb-6 md:mx-6 md:-mt-10 rounded-3xl"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Leading with code, vision, and a spark of strategy."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I'm a Technology Expert passionate about helping organizations align their IT strategies with business goals. I specialize in leading tech teams to deliver efficient, scalable, and innovative solutions that drive success.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                To know more about me and my professional journey, click the &apos;Profession&apos; tab above.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="https://drive.google.com/uc?export=view&id=1rX-Ptw5iemC7isI2jg8QIc_s8vkjrOFc"
                  target="_blank"
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:aaronbserrano@yahoo.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}

