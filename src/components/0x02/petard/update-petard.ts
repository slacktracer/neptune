import type { UpdatePetard } from "../types/UpdatePetard";

export const updatePetard: UpdatePetard = ({ $, petard }) => {
  if (petard.position.x + petard.width > $.width || petard.position.x < 0) {
    petard.velocity.x = petard.velocity.x * -1;
  }
  if (petard.position.y + petard.height > $.height || petard.position.y < 0) {
    petard.velocity.y = petard.velocity.y * -1;
  }

  petard.velocity.add(petard.acceleration);

  petard.position.add(petard.velocity);

  petard.acceleration.mult(0);
};
