/**
 * Marquee — infinite horizontal scroll strip with faded edges.
 *
 * Children are duplicated so the loop is seamless. Pass `reverse`
 * to flip direction and `speed` (seconds per loop) to tune pace.
 */
const Marquee = ({ children, reverse = false, speed = 30, className = "" }) => {
  return (
    <div className={`marquee-mask w-full overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee items-center gap-6 will-change-transform"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
