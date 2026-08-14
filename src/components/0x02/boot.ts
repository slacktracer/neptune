import type p5 from "p5";

import { applyForceToBody } from "../common/apply-force-to-body";
import { getSketch } from "../common/get-sketch";
import { isInsideSquare } from "../common/is-inside-square";
import { makePetard } from "./petard/make-petard";
import { renderPetard } from "./petard/render-petard";
import { updatePetard } from "./petard/update-petard";
import type { Petard } from "./types/Petard";

const petards: Petard[] = [];

export const boot = ({ node }: { node: HTMLDivElement }) => {
  const $ = getSketch({ node });

  const gravity: p5.Vector = $.createVector(0, 0.025);

  let petard: Petard;

  $.setup = () => {
    $.createCanvas(400, 600);

    petards.push(
      makePetard({
        $,
        colour: $.color(0, 0, 0),
        x: 0,
        y: 10,
      }),
      makePetard({
        $,
        colour: $.color(0, 0, 0),
        x: 100,
        y: 10,
      }),
      makePetard({
        $,
        colour: $.color(0, 0, 0),
        x: 200,
        y: 10,
      }),
      makePetard({
        $,
        colour: $.color(0, 0, 0),
        x: 300,
        y: 10,
      }),
    );
  };

  $.draw = () => {
    $.background(255);

    for (petard of petards) {
      applyForceToBody({ body: petard, force: gravity });

      const { position, height, width } = petard;

      if ($.mouseIsPressed) {
        // const insideSquare = isInsideSquare({
        //   square: { height, width, x: position.x, y: position.y },
        //   x: $.mouseX,
        //   y: $.mouseY,
        // });
        const insideSquare = $.mouseX > position.x && $.mouseX < position.x + width;

        if (insideSquare) {
          applyForceToBody({ body: petard, force: $.createVector(0, -0.5) });
        }
      }

      updatePetard({ $, petard });

      renderPetard({ $, petard });
    }
  };
};
