import type { UpdatePetard } from "../types/UpdatePetard";

export const updatePetard: UpdatePetard = ({ $, petard }) => {
  // console.log(petard.acceleration.mag());
  if (petard.position.y + petard.height > $.height) {
    petard.position.y = $.height - petard.height;

    petard.velocity.x = 0;
    petard.velocity.y = 0;
  } else {
    petard.velocity.add(petard.acceleration);

    petard.position.add(petard.velocity);

    petard.acceleration.mult(0);
  }
};
