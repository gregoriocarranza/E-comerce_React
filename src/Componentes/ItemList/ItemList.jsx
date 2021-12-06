import { Fragment } from "react";

import Item from "./Item";

function ItemList({ objArray }) {
  return (
    <Fragment>
      {objArray.map((u) => (
        <Item key={u.id} prod={u} />
      ))}
    </Fragment>
  );
}

export default ItemList;
