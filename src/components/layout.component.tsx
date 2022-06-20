import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";

interface ILayoutComponentProps {
  children: ReactNode;
}

export const LayoutComponent: FunctionComponent<ILayoutComponentProps> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>My Team Page</title>
        <meta
          name="description"
          content="My Team Page Challenge by devChallenges.io"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container mx-auto min-h-screen flex flex-col pt-20 px-5 pb-6">
        <header className="pb-14 lg:flex">
          <h1 className="text-4xl font-black pb-10 lg:w-1/2">
            The creative crew
          </h1>
          <div className="lg:2-1/2">
            <h3 className="text-xl font-bold pb-10 lg:text-lg lg:pb-3">
              WHO WE ARE
            </h3>
            <div className="text-lg leading-5 font-medium lg:font-normal">
              <p>We are team of creatively diverse. driven.</p>
              <p>innovative individuals working in various</p>
              <p>locations from the world.</p>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="text-gray-400 text-center text-sm">
          created by{" "}
          <a
            href="https://github.com/hjcasayas/dev-challenges-my-team-page"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            hjcasayas
          </a>{" "}
          -{" "}
          <a
            href="https://devchallenges.io/challenges/hhmesazsqgKXrTkYkt0U"
            target="_blank"
            rel="noreferrer"
          >
            devChallenges.io
          </a>
        </footer>
      </div>
    </>
  );
};
