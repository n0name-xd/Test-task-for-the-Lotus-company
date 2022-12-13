import { ContentBidding } from "./DescriptionTable/ContentBidding/ContentBidding";
import { DescriptionTable } from "./DescriptionTable/DescriptionTable";
import style from "./TableBidding.module.css";

export const TableBidding: React.FC = () => {
    return (
        <div className={style.table_wrapper}>
            <DescriptionTable />
            <ContentBidding />
        </div>
    );
};