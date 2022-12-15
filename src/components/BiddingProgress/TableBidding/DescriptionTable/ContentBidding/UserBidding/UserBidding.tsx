import style from "./UserBidding.module.css";
import { UserBiddingProps } from "./interfaces/UserBiddingProps";
import { converterMoney } from "../../../../../../helpers/converterMoney";
import icon from "./icons/hourglass.png";
import { timeConverter } from "../../../../../../helpers/timeConverter";
import { useAppDispatch, useAppSelector } from "../../../../../../app/hooks";
import { timerRun } from "../../../../../../features/timer/timerSlice";

export const UserBidding: React.FC<UserBiddingProps> = ({ companyDescription, isTimer, position }: UserBiddingProps) => {

    const startingPrice = companyDescription.manufacturingCost.start;
    const step = companyDescription.manufacturingCost.step;
    const totalPrice = startingPrice - step;

    const styleTimer: string = isTimer ? style.timer_conteiner : style.timer_conteiner_empty;

    const timer = useAppSelector(state => state.timer.time);
    const dispatch = useAppDispatch();
    (() => {
        setInterval(() => {
            dispatch(timerRun())
        }, 1000)
    })();

    return (
        <div className={style.user_wrapper}>
            <div className={styleTimer}>
                <span 
                    >
                    {isTimer && <span>{`00:${timeConverter(timer.minutes)}:${timeConverter(timer.seconds)}`}</span>} 
                </span>
                {isTimer && <img
                    className={style.icon}
                    src={icon}
                    alt="hourglass"
                />}
            </div>
            <div className={style.user_number}>
                УЧАСТНИК №{position}
            </div>
            <div className={style.company_name}>
                {companyDescription.compamyName}
            </div>
            <div className={style.companyEvents}>
                {companyDescription.companyEvents}
            </div>
            <div className={style.productionTime}>
                {companyDescription.productionTime}
            </div>
            <div className={style.warrantyObligations}>
                {companyDescription.warrantyObligations}
            </div>
            <div className={style.paymentTerms}>
                {companyDescription.paymentTerms}
            </div>
            <div className={style.totalPrice}>
                <div style={{ color: "blue" }}>{converterMoney(startingPrice)}</div>
                <div style={{ color: "red", padding: "3px" }}>-{converterMoney(step)}</div>
                <div style={{ color: "green" }}>{converterMoney(totalPrice)}</div>
            </div>
        </div>
    );
};

