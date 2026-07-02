import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "./Loader";
import { LowPolyManWorkingAtATableWithALaptop } from "../models";
import { canCreateWebGLContext } from "../utils/webgl";

const SceneFallback = () => (
  <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950' />
);

const AboutScene = () => {
  const [hasWebGL] = useState(canCreateWebGLContext);

  return (
    <div className='relative h-[260px] w-full overflow-hidden rounded-[8px] border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 sm:h-[320px] md:h-[380px]'>
      <ErrorBoundary fallback={<SceneFallback />}>
        {hasWebGL ? (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }}
            className='cursor-grab active:cursor-grabbing'
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <pointLight position={[5, 10, 0]} intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />

            <Suspense fallback={<Loader />}>
              <PresentationControls
                global
                snap
                rotation={[0, 0.35, 0]}
                polar={[-0.15, 0.2]}
                azimuth={[-0.5, 0.5]}
                config={{ mass: 2, tension: 350, friction: 40 }}
              >
                <LowPolyManWorkingAtATableWithALaptop
                  position={[0, -2.9, 0]}
                  rotation={[0, -0.6, 0]}
                  scale={[0.46, 0.46, 0.46]}
                />
              </PresentationControls>
            </Suspense>
          </Canvas>
        ) : (
          <SceneFallback />
        )}
      </ErrorBoundary>

      <span className='pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur dark:bg-slate-950/80 dark:text-slate-300'>
        <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
        Open to work
      </span>
    </div>
  );
};

export default AboutScene;
