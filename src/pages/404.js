import * as React from "react";

import { Link } from "gatsby";

import PageHead from "../components/PageHead";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col space-y-5 justify-center items-center min-h-screen">
      <p className="text-3xl text-neutral-100 font-sans">404 Page not Found</p>
      <Link className="text-neutral-300" to="/">Back to Homepage</Link>
    </main>
  )
}

export default NotFoundPage;

export const Head = () => <PageHead titleExt="Not Found" />;
