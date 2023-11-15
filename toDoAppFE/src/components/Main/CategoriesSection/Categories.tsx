import { SectionLabel } from "../../common/SectionLabel";
import { Row } from "../../common/Row";
import { CategoryBox } from "./CategoryBox";
export const Categories = () => {
    return (
        <>
            <SectionLabel>Categories</SectionLabel>
            <Row style={{ overflowX: "scroll", whiteSpace: "nowrap", gap: "1rem", padding: " 1rem" }}>
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
            </Row>
        </>
    );
}
