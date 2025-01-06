import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="flex items-center h-screen p-16">
    <div className="flex flex-col items-center justify-center px-5 mx-auto my-8 ">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-bold text-9xl">
          <span className="sr-only">Error</span>
          <span className="text-primary">404</span>
        </h2>
        <p className="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
        <p className="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link rel="noopener noreferrer" to="/" className="px-5 py-3 ml-4 text-white transition-all bg-secondary hover:bg-primary rounded-xl">Back to homepage</Link>
      </div>
    </div>
  </section>
  );
};

export default NotFoundPage;
