import p5 from "p5";

import type { ApplyForceToBody } from "../0x02/types/ApplyForceToBody";

export const applyForceToBody: ApplyForceToBody = ({ body, force }) => {
  const forceByMass = p5.Vector.div(force, body.mass);

  body.acceleration.add(forceByMass);
};
