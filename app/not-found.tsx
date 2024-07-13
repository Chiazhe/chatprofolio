import NotFoundRoutingButton from "@/components/NotFoundRoutingButton";

const NotFound = () => {
  return (
    <div
      id="about"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-black px-12 py-36 bg-grid-white/[0.2] sm:px-16 md:px-24 md:py-48"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <p className="mb-4 text-xl">Opps. This page couldn&apos;t be found!</p>
      <NotFoundRoutingButton />
    </div>
  );
};

export default NotFound;
