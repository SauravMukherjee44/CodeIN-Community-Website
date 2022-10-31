import React from "react";

const ListItem = (props) => {
  const { original, short, action, code } = props;
  return (
    <tr className="text-center">
      <td>{original}</td>
      <td>{short}</td>
      <td>
        <button
          onClick={() => action(code)}
          className="bg-red-600 hover:text-red-500 border-2 hover:border-red-500  hover:bg-white text-white md:py-2 py-1 md:px-6 px-3 ml-3 rounded  font-semibold hover:font-semibold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
