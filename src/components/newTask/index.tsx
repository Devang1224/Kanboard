import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import generateTaskId from "@/utils/generateNewtaskId";
import { useDispatch } from "react-redux";
import { createNewTask } from "@/reducers/Data";
import CloseIcon from '@mui/icons-material/Close';

type props = {
  columnId: string;
  columnStatus: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewTaskModal = ({
  columnId,
  columnStatus,
  openModal,
  setOpenModal,
}: props) => {


  const [newTask, setNewTask] = useState({
    id: "",
    title: "",
    summary: "",
    assignee: "",
    priority: "Low",
    date: "",
    status: columnStatus,
  });

  const dispatch = useDispatch();
  

  const handleSubmitTaskForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewTask({newTask,columnId}));
    setOpenModal(false);
  };

const handleCloseModal = (e:React.MouseEvent)=>{
setOpenModal(false);
e.stopPropagation();
}

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center"
    >
      <div className="w-[25rem] outline-none ">
        <form
          className="w-full h-full bg-[#fffcfcd3] rounded-lg p-3 flex flex-col"
          onSubmit={handleSubmitTaskForm}
        >
        <span className=" bg-[#ff0000f0] w-3 h-3 rounded-[50%] flex self-end cursor-pointer" onClick={handleCloseModal}></span>

          <label htmlFor="taskTitle" className="text-[#525e73] text-lg p-1">
            Title:
          </label>
          <input
            id="taskTitle"
            type="text"
            className="shadow-md outline-none rounded-md p-1"
            required
            onChange={(e) => {
              setNewTask({ ...newTask, title: e.target.value });
            }}
          />

          <label htmlFor="summary" className="text-[#525e73] text-lg p-1 mt-1">
            Description:
          </label>
          <textarea
            id="summary"
            className="h-[6rem] resize-none p-1 outline-none shadow-custom rounded-md "
            onChange={(e) => {
              setNewTask({ ...newTask, summary: e.target.value });
            }}
          ></textarea>

          <div className="flex justify-between p-1">
            <div className="flex flex-col">
              <label
                htmlFor="assignee"
                className="text-[#525e73] text-lg p-1 mt-1"
              >
                Assignee:
              </label>
              <input
                id="assignee"
                type="text"
                className="w-[12rem] shadow-md outline-none rounded-md p-1"
                required
                onChange={(e) => {
                  const newTaskId = generateTaskId();
                  const todaysDate = `a{new Date()}`;
                  setNewTask({
                    ...newTask,
                    assignee: e.target.value,
                    id: newTaskId,
                    date: todaysDate,
                  });
                }}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="assignee"
                className="text-[#525e73] text-lg p-1 mt-1"
              >
                Priority:
              </label>
              <select
                className="w-[10rem] shadow-md outline-none rounded-md p-1"
                defaultValue="Low"
                onChange={(e) => {
                  setNewTask({ ...newTask, priority: e.target.value });
                }}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Highest">Highest</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center pt-3">
            <button className="w-[10rem] p-2 bg-green-400 rounded-lg shadow-md">
              Done
            </button>
          </div>
        </form>
      </div>
    </Modal>
    
  );
};

export default NewTaskModal;
