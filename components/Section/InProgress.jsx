import { Cards, ModalPage } from "./Cards";
import { AiOutlinePlus } from "react-icons/ai";

const InProgress = ({
  modalOpen,
  setModalOpen,
  newTask,
  setNewTask,
  inProgressArr,
  setInProgressArr,
  handleAdd,
  handleDel,
}) => {
  const handleOpenModal = () => {
    setModalOpen(true);
    console.log("lfks");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full bg-[#f4f6f8] p-4 rounded">
        <h2 className="text-[1rem] text-[#858a93]">In Progress</h2>
        <div className="bg-black text-white rounded py-1 px-3">
          <span className="">{inProgressArr.length}</span>
        </div>
      </div>
      <Cards
        data={inProgressArr}
        handleDel={(id) => handleDel(id, inProgressArr, setInProgressArr)}
      />
      <button
        className="text-[#7D8088] font-medium w-full flex gap-3 py-3 mt-4 items-center justify-center bg-[f2f4f5] border border-dashed border-[#d5d5d5] rounded-xl"
        onClick={handleOpenModal}
      >
        <AiOutlinePlus />
        <span className="">Add Task</span>
      </button>

      {modalOpen && (
        <ModalPage
          handleCloseModal={handleCloseModal}
          newTask={newTask}
          setNewTask={setNewTask}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default InProgress;
