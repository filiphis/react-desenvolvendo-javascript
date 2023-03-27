import { v4 as uuid } from "uuid";

export function serviceGetNewID() {
  return uuid();
}
