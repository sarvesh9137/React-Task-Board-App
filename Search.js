import { saveSearch } from "../redux/features/task-board-slice";
import { useAppDispatch } from "../redux/app/hooks";

export default function Search() {
    const dispatch = useAppDispatch();

    return (
        <div className="FilterBy">
            {/* <h2>Filter By:</h2> */}
            <div style={{ display: "flex", gap: "10px" }}>
                <h2>Filter By:</h2>
                <input
                    type="text"
                    placeholder="Assignee"
                    onChange={(e) => {
                        dispatch(saveSearch({ assignee: e.target.value }));
                    }}
                />
                <div style={{ display: "flex", gap: "2px" }}>
                    <input
                        type="date"
                        placeholder="Start Date"
                        onChange={(e) => {
                            dispatch(saveSearch({ startDate: e.target.value }));
                        }}
                    />
                    
                    <input
                        type="date"
                        placeholder="End Date"
                        onChange={(e) => {
                            dispatch(saveSearch({ endDate: e.target.value }));
                        }}
                    />
                    
                </div>
            </div>
        </div>
    );
}
