import axios from "axios";
import React, { useEffect, useState } from "react";
import svg from "../resource/link.svg";
import LinkList from "./LinkList";

const Shortner = () => {
  // state for input field
  const [input, setInput] = useState("");

  // const site name

  const [siteName, setSiteName] = useState("");
  // list of links
  const [list, setList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("LinkList")) {
      const localdata = JSON.parse(localStorage.getItem("LinkList"));
      setList(localdata);
    }
  }, []);

  // logic for link shortning
  const handleShort = async (e) => {
    e.preventDefault();
    if (input && siteName) {
      const res = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      const data = await res.data.result;
      const details = {
        code: data.code,
        original_link: siteName.slice(0, 12),
        shorted_link: data.short_link,
      };
      setSiteName("");
      setInput("");
      // setting list and localStorage
      setList([...list, details]);
      localStorage.setItem("LinkList", JSON.stringify([...list, details]));
      return null;
    } else {
      return alert("Error: empty input");
    }
  };

  // delete logic
  const handleDelete = (code) => {
    if (code) {
      const filtered = list.filter((item) => item.code !== code);

      // localstorage and list update
      localStorage.setItem("LinkList", JSON.stringify(filtered));
      setList(filtered);
    }
  };

  return (
    <>
      <div className="md:mx-32 mx-10 md:pt-20 pt-10">
        {/* main hero section  */}
        <div className="main  grid lg:grid-cols-2 grid-cols-1 " id="main">
          <div className="content my-auto">
            <h1 className="md:text-7xl text-4xl font-bold text-black">
              More than just Shorter Links
            </h1>
            <p className="md:text-xl font-bold text-gray-500 my-3">
              Build your brand's recognition and get detailed insight and how
              your links are performing.
            </p>
            <button className="bg-purple-900 hover:text-purple-900 border-2 hover:border-purple-900  hover:bg-white text-white py-2 px-6 my-3 rounded-full  font-semibold hover:font-semibold">
              <a href="#short"> Get Started</a>
            </button>
          </div>
          <div className="text-center">
            <img src={svg} alt="link" className="w-3/4" />
          </div>
        </div>
        {/* main hero section  */}

        {/* form  */}
        <div className="form my-20 lg:mx-20 " id="#short">
          <div className="bg-purple-200 py-5 px-5 rounded text-center">
            <input
              type="text"
              placeholder="Shorten your link here... "
              className="border-2 border-purple-900 rounded md:w-4/5 w-full py-2 px-3"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input
              type="text"
              placeholder="Site name here... "
              className="border-2 border-purple-900 rounded md:w-1/5 w-full py-2 px-3 my-2 md:mx-1"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
            <button
              onClick={handleShort}
              className="bg-purple-900 hover:text-purple-900 border-2 hover:border-purple-900  hover:bg-white text-white py-2 px-6 lg:my-3 mt-3 ml-3 rounded  font-semibold hover:font-semibold"
            >
              Short it!
            </button>
          </div>
        </div>
        {/* form  */}
        <LinkList list={list} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default React.memo(Shortner);
