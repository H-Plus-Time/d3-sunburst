import {treemap} from "d3-hierarchy";

// returns a reusable treemap layout
export default function() {
  return treemap().size([600, 400]);
}
