import React from "react";
const Post = (props) => {
  if (props.loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <tr>
      <td>{props.data.original_title}</td>
      <td>{props.data.original_title}</td>
    </tr>
  );
};

export default Post;
