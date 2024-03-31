import { saveIsAddingNewItem, clearBoard, clearLocalStorage } from "../redux/features/task-board-slice";
import { useAppSelector, useAppDispatch } from "../redux/app/hooks";
// import { clearStoredTasks } from "../utils/localStorage";
import AddTaskForm from "./AddTaskForm";
import Modal from "./Modal";
import Search from "./Search";
import SaveFile from "./SaveFile";
// import GitHubIcon from "./icons/GithubIcon";
import SortActions from "./SortActions";

export default function Header() {
  const taskBoardState = useAppSelector(state => state.taskBoard);
  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <div className="header-info">
        <h1>Task Board</h1>
        <ul>
          {/* <li>
            <a
              className="github-icon"
              href="https://github.com/sarvesh9137"
              title="Link to react-task-board repository on GitHub"
            >
              <GitHubIcon />
            </a>
          </li> */}
          <li>
            <img
              src="https://tannerdolby.com/images/arc1.png"
              alt="Archimedean spiral icon"
              width="27"
              height="27"
            />
          </li>
        </ul>
      </div>
      <div className="header-inputs">
        <div className="controls">
          <Search />
          <SortActions />
        </div>
        <div style={{ display: 'flex', gap: '.5rem' }}>
          <button
            title="Add Task"
            onClick={() => {
              dispatch(saveIsAddingNewItem(true));
            }}
            className="add-task-btn"
          >
            <span>+</span> New Task
        </button>
          <button
            title="Clear task board"
            className="light-control-btn"
            onClick={() => {
              dispatch(clearBoard());
              dispatch(clearLocalStorage());
            }}
          >
            Clear
        </button>
        <SaveFile />
        </div>
        <Modal
          content={<AddTaskForm />}
          isOpen={taskBoardState.isAddingNewItem}
          title="Add Task"
          clickEffect={(isOpen) => dispatch(saveIsAddingNewItem(!isOpen))}
        />
      </div>
    </div>
  );
}
