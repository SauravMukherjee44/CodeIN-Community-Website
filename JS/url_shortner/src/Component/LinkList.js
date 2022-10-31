import React from "react";
import ListItem from "./ListItem";

const LinkList = (props) => {
  const { list, handleDelete } = props;
  return (
    <>
      <div id="list my-5">
        <h2 className="text-2xl font-bold text-purple-900">Shorten links</h2>
        <table className="w-full my-5">
          <thead className="bg-purple-900 text-white text-center    ">
            <tr>
              <th className="py-2">Link</th>
              <th>Shorten link</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-purple-100">
            {list.map((data) => {
              return (
                <ListItem
                  key={data.code}
                  action={handleDelete}
                  original={data.original_link}
                  short={data.shorted_link}
                  code={data.code}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LinkList;
