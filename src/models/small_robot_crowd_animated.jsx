/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model's meshes, we need to iterate through
 * each part of our model's meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/small_robot_crowd_animated.glb";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export function SmallRobotCrowdAnimated({ currentAnimation = "idle", ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Stop all current animations
    Object.values(actions).forEach((action) => {
      action.stop();
      action.reset();
    });

    // Play the requested animation if it exists
    if (actions[currentAnimation]) {
      actions[currentAnimation]
        .reset()
        .fadeIn(0.5)
        .play();
    } else {
      // If no animation is specified, play the default animation
      const defaultAnimation = Object.keys(actions)[0];
      if (defaultAnimation) {
        actions[defaultAnimation]
          .reset()
          .fadeIn(0.5)
          .play();
      }
    }

    // Cleanup function
    return () => {
      Object.values(actions).forEach((action) => {
        action.fadeOut(0.5);
      });
    };
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, -Math.PI]}>
          <group
            name="8ec7ed6050da4922814be570a78df7a6fbx"
            rotation={[-Math.PI, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  {Object.entries(nodes).map(([name, node]) => {
                    if (node.isSkinnedMesh) {
                      return (
                        <skinnedMesh
                          key={name}
                          name={name}
                          geometry={node.geometry}
                          material={materials[node.material.name]}
                          skeleton={node.skeleton}
                        />
                      );
                    }
                    return null;
                  })}
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(scene);

export default SmallRobotCrowdAnimated;
