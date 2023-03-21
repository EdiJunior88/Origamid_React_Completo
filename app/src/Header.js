import React, { memo } from "react";

const Header = () => {
  console.log("Renderizado");
  return (
    <div>
      <h1>Header Aqui</h1>
    </div>
  );
};

export default memo(Header);
