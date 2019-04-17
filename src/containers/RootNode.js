import React, { useState, useEffect } from "react";
import axios from "axios";

import Node from "../components/Node";

import createTree from "../lib/createTree";

const RootNode = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      // can be replaced at a later date with an acutall API call
      const { data } = await axios("src/api/data.json");
      const tree = createTree(data);
      console.log(tree);
      setData(tree);
    };
    try {
      setLoading(true);
      getData();
    } catch (e) {
      setError("Couldn't get data");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data</p>;
  if (data) return data.map(item => <Node key={item.id} item={item} />);
};

export default RootNode;
