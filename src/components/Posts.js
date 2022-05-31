import React from "react";
const Post = (props) => {
  if (props.loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {props.data.map((val) => {
        return (
          <tr key={val.id}>
            <td>{val.original_title}</td>
            <td>{val.vote_count}</td>
            <td>{val.vote_average}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Post;
