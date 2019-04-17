export default ({ data }) => {
  /* 
    default object structure
     {
        id: ID!,
        name: String!,
        managerId: ID!,
        subordinates: [employees]!
     }
  */
  const map = data.reduce((acc, cur) => {
    acc[cur.id] = { ...cur, subordinates: [] };
    return acc;
  }, {});

  /*
    making the tree an array incase there are multiple CEO's
  */
  let tree = [];

  /*
    iterate through the data and build out the tree
  */
  data.forEach(employee => {
    if (employee.managerId)
      /*
        if we find a manager, then we simply add this employee
      */
      map[employee.managerId].subordinates.push(map[employee.id]);
    /*   
        if there isnt any manager id for the employee,
        we assume that its another CEO (per the documentation)
        and needs to be at root level
      */ else
      tree.push(map[employee.id]);
  });

  return tree;
};
