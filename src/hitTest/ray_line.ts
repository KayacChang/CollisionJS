import { Line, Ray } from "../type";
import { inRange } from "../utils";
import { sub, det, add } from "../../lib/vec2";

export default function hitTest(o2: Ray, o1: Line) {
  const l1 = sub(o1.start, o1.end);
  const l2 = sub(o2.start, add(o2.start, o2.dir));
  const l3 = sub(o1.start, add(o2.start, o2.dir));

  const den = det([l1, l2]);
  if (den === 0) {
    return false;
  }

  const t = det([l3, l2]) / den;
  const u = (-1 * det([l3, l1])) / den;

  return inRange([0, 1])(t) && u > 0;
}
