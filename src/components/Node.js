import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NodeStyle = styled.div`
  margin-left: 20px;
`;

const Node = ({ item: employee }) => {
  return (
    <NodeStyle>
      <p>
        Name: {employee.name}
        {!employee.managerId && " CEO"}
      </p>
      {employee.subordinates.map(item => (
        <Node key={item.id} item={item} />
      ))}
    </NodeStyle>
  );
};

Node.prototype = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    managerId: PropTypes.number,
    subordinates: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Node;
