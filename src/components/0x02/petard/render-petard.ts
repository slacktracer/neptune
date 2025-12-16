import type { RenderPetard } from "../types/RenderPetard";

export const renderPetard: RenderPetard = (
  { $, petard },
) => {
  $.push();

  $.noStroke();

  $.fill(petard.colour);

  $.rect(petard.position.x, petard.position.y, petard.width, petard.height);

  $.pop();
};
