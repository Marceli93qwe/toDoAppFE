import "./main.css"
import {CategoryBox} from "./CategoryBox";
import {Row} from "../common/Row";

export const Main = () => {
    return (
        <main>
            <h5 style={{fontFamily: "Ubuntu Mono", color: "#303030"}}>Categories</h5>
            <Row style={{overflowX: "scroll", whiteSpace: "nowrap", gap: "1rem", padding: "1rem 0.1rem"}}>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
                <CategoryBox/>
            </Row>
            <h5 style={{fontFamily: "Ubuntu Mono", color: "#303030"}}>Current tasks</h5>

        </main>
    )
}