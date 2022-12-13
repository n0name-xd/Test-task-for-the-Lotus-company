import style from "./TitleBidding.module.css";
import { BiddingProgressProps } from "../interfaces/BiddingProgressProps";

export const TitleBidding: React.FC<BiddingProgressProps> = ({ lotInformation }: BiddingProgressProps) => {
    return (
        <div className={style.tytle_wrapper}>
            <div className={style.conteiner}>
                Ход торгов 
                <span className={style.title_item}>
                    {" "}{lotInformation.lotName}
                    {" №"}{lotInformation.lotNumber}
                    {" ("}{lotInformation.lotTime}{")"}
                </span>
            </div>
        </div>
    );
};