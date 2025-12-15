import type { UpdatePetard } from "../types/UpdatePetard";

export const updatePetard: UpdatePetard = ({ petard }) => {
  petard.y += .5;
};
