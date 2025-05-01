export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-primary-100 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops! Page Not Found.</h1>
        <p className="mt-4">The page you’re looking for doesn’t exist.</p>
        {/* <a href="/" className="mt-6 inline-block bg-primary-80 text-white py-2 px-4 rounded-md hover:bg-primary-90">
          Go back to Home
        </a> */}
      </div>
    </div>
  );
}
