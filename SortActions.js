import { useAppDispatch } from "../redux/app/hooks";
import { saveSortBy } from "../redux/features/task-board-slice";

export default function SortActions() {
    const dispatch = useAppDispatch();

    return (
        <div>
            <h3>Sort By:</h3>
            <select id="column-sort-actions" onChange={(e) => {
            dispatch(saveSortBy(e.target.value));
        }}>
            <option value="">Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
        </select>
        </div>
    );
}
