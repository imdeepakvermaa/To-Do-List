import React, { useState } from "react";

const Hero = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)



  }

  let renderTask = <h1>No task available</h1>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center gap-10 mb-5">
          <div className="flex justify-between items-center w-2/3">
            <h5>{t.title}</h5>
            <h6>{t.desc}</h6>
          </div>
          <div>
          <button onClick={() => {
            deleteHandler(i)

          }} className=" bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
          </div>
            
        </li>
      );
    });
  }
  return (
    <div>
      <div className="flex flex-col   ">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            className=" border-4 border-zinc-950  m-10 p-4"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Description"
            className=" border-4 border-zinc-950  m-10 p-4"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button className=" bg-zinc-900 px-6 py-2 text-white font-bold text-xl rounded">
            ADD TASK
          </button>
        </form>
      </div>

      <div>
        <div className="p-8 bg-green-600">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
