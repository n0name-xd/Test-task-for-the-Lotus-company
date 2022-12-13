import style from "./BiddingProgress.module.css";
import { TitleBidding } from "./TitleBidding/TitleBidding";
import { BiddingProgressProps } from "./interfaces/BiddingProgressProps";
import { NoteBidding } from "./NoteBidding/NoteBidding";
import { TableBidding } from "./TableBidding/TableBidding";

export const BiddingProgress: React.FC<BiddingProgressProps> = ({ lotInformation }: BiddingProgressProps) => {
    return (
        <div className={style.wrapper_bidding}>
            <TitleBidding lotInformation={lotInformation} />
            <NoteBidding />
            <TableBidding />
        </div>
    );
}; 