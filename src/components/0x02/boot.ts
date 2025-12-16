import { applyForceToBody } from "../common/apply-force-to-body";
import { getSketch } from "../common/get-sketch";
import { isInsideSquare } from "../common/is-inside-square";
import { makePetard } from "./petard/make-petard";
import { renderPetard } from "./petard/render-petard";
import { updatePetard } from "./petard/update-petard";
import type { Petard } from "./types/Petard";

export const boot = async ({ node }: { node: HTMLDivElement }) => {
  const { p5, sketch } = await getSketch({ node });

  const $ = sketch;

  let petard: Petard;

  $.mousePressed = () => {
    const { position, height, width } = petard;

    const insideSquare = isInsideSquare({
      square: { height, width, x: position.x, y: position.y },
      x: $.mouseX,
      y: $.mouseY,
    });

    if (insideSquare) {
      applyForceToBody({ body: petard, force: $.createVector(1, 1), p5 });
    }
  };

  $.setup = () => {
    $.createCanvas(400, 600);

    petard = makePetard({ $, colour: $.color(255, 204, 0), x: 10, y: 10 });
  };

  $.draw = () => {
    $.background(255);

    updatePetard({ $, petard });

    renderPetard({ $, petard });
  };
};
