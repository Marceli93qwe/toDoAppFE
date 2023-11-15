import "./main.css"
import { CategoryBox } from "./CategoryBox";
import { Row } from "../common/Row";
import { TaskList } from "./TaskList";

export const Main = () => {
    return (
        <main>
            <h5 style={{ fontFamily: "Ubuntu Mono", color: "#303030", padding: "0.5rem 1rem 0" }}>Categories</h5>
            <Row style={{ overflowX: "scroll", whiteSpace: "nowrap", gap: "1rem", padding: " 1rem" }}>
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
            </Row>
            <TaskList />
        </main>
    )
}