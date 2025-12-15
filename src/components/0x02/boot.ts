import { getSketch } from "../common/get-sketch";
import { makePetard } from "./petard/make-petard";
import { renderPetard } from "./petard/render-petard";
import { updatePetard } from "./petard/update-petard";
import type { Petard } from "./types/Petard";

export const boot = async ({ node }: { node: HTMLDivElement }) => {
  const sketch = await getSketch({ node });

  const $ = sketch;

  let petard: Petard;

  $.setup = () => {
    $.createCanvas(400, 600);

    petard = makePetard({ colour: $.color(255, 204, 0), x: 10, y: 10 });
  };

  $.draw = () => {
    $.background(255);

    updatePetard({ petard });

    renderPetard({ $, petard });
  };
};
