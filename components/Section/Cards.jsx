import { BsThreeDotsVertical, BsListCheck } from "react-icons/bs";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

export const Cards = ({ data, handleDel }) => {
  // console.log(data);
  return (
    <main>
      {/* <div className="w-full grid md:gird-cols-2 lg:grid-cols-3 gap-16 lg:gap-4 xl:gap-10"> */}
     
      <section className="flex flex-col gap-5">
        

        {data.map((each, idx) => {
          const { id, task, no_task, pro_image, title, desc, bar, img } = each;
          return (
            <div key={id} className="flex flex-col bg-white rounded-xl p-4">
              <img src={pro_image} alt="" className="pb-4" />
              <div className="title">
                <div className="flex justify-between items-center">
                  <h3 className="text-[1.1rem] text-black font-semibold">
                    {title}
                  </h3>
                  <BsThreeDotsVertical className="hidden h-5 opacity-60" />
                </div>
                <p className="w-48 opacity-30">{desc}</p>
              </div>
              <div className="progress grid gap-2 text-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 opacity-60">
                    <BsListCheck />
                    <p className="">Progress</p>
                  </div>
                  <span className="">10/10</span>
                </div>
                <div className="">
                  <span className="">{bar}</span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-5 opacity-60">
                    <div className="flex items-center gap-2">
                      <img src="./image/icon1.svg" alt="" className="w-5" />
                      <span className="">7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="./image/icon2.svg" alt="" className="w-5" />
                      <span className="">2</span>
                    </div>
                  </div>
                  <TiDeleteOutline
                    className="flex justify-end mr-0 w-7 h-10 text-red-700 opacity-95"
                    onClick={() => handleDel(id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section> 

      {data.length === 0 && <div className="mt-5 text-center">
        <p className="">"No Task"</p>
      </div>}
    </main>
  );
};

export const ModalPage = ({
  handleCloseModal,
  newTask,
  setNewTask,
  handleAdd,
}) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-[#00000099] p-5 z-[100]">
      <div className="w-full h-full grid place-items-center">
        {/* flex justify-center items-center */}
        <form
          onSubmit={handleAdd}
          action=""
          className="bg-white w-[600px] pt-4 pb-8 px-6 md:px-8 rounded-2xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-black text-xl font-semibold">Add New Task</h2>
            <AiOutlineClose
              className="text-[#eb1414] text-3xl"
              onClick={handleCloseModal}
            />
          </div>
          <fieldset className="flex flex-col gap-3 mb-4">
            <label htmlFor="" className="flex flex-col mb-4">
              <span className="font-semibold text-[#10171b] text-xs mb-2">
                Title
              </span>
              <input
                type="text"
                value={newTask?.title}
                placeholder="Enter task title"
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
                className="w-full border border-gray-400 text-base text-black placeholder:text-[#666666] px-3 py-4 bg-transparent outline-none rounded-[0.5rem]"
              />
            </label>
            <label htmlFor="" className="flex flex-col mb-4">
              <span className="font-semibold text-[#10171b] text-xs mb-2">
                Description
              </span>
              <input
                type="text"
                value={newTask?.desc}
                placeholder="Enter task description"
                onChange={(e) =>
                  setNewTask({ ...newTask, desc: e.target.value })
                }
                className="w-full border border-gray-400 text-base text-black placeholder:text-[#666666] px-3 py-4 bg-transparent outline-none rounded-[0.5rem]"
              />
            </label>
          </fieldset>
          <div className="w-full flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#adabb2] rounded-lg py-3 px-8 hover:bg-[#45269c]"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// export default Cards;

// export const AddBtn = () => {
//   return (
//     <button className="text-[#7D8088] font-medium w-full flex gap-3 py-3 mt-4 items-center justify-center bg-[f2f4f5] border border-dashed border-[#d5d5d5] rounded-xl">
//       <AiOutlinePlus />
//       <span className="">Add Task</span>
//     </button>
//   );
// };

//   export default Body;
