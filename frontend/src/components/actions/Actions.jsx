import React from "react";

function Actions() {
  return (
    <div className="actions border">
      <form>
        <label>
          <p>Title</p>
          <input type="text" />
        </label>
        <label>
          <p>Description</p>
          <input type="text" />
        </label>
        <label>
          <p>Price</p>
          <input type="text" />
        </label>
        <label>
          <p>Rating</p>
          <input type="number" min="1" max="5" />
        </label>
        <label>
          <p>Stock</p>
          <input type="number" min="0" />
        </label>
        <label>
          <p>Brand</p>
          <input type="text" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Actions;
