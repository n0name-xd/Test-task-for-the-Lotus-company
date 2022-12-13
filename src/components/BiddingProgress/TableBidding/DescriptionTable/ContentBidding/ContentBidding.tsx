import style from "./ContentBidding.module.css";
import  { UserBidding }  from "./UserBidding/UserBidding";
import { dataCompany } from "../../../../../dataBidding/dataCompanys";
import { useAppSelector } from "../../../../../app/hooks";
import { useEffect, useState } from "react";

export const ContentBidding: React.FC = () => {

    const position = useAppSelector(state => state.timer.changeUser.position);
    let [pos, setPos] = useState<number>(-1)

    function next(arr: any) {
        setPos(pos += 1)
        if (pos == arr.length) {
            setPos(pos = 0)
        }
    };
    useEffect(() => {
        next(dataCompany)
    }, [position])
    
    const companyList = dataCompany.map((company, index) => {
        return (
            <UserBidding
                key={company.compamyName}
                companyDescription={company}
                isTimer={pos === index ? true : false}
                position={index + 1}
            />
        );
    });

    return (
        <div className={style.content_wrapper}>
            <div className={style.bg_conteiner}>
                <div className={style.content_timer}>

                </div>
                <div
                    className={style.content_bg}
                    style={{ height: `${60}px`, backgroundColor: "#F4F4F4" }}
                >
                </div>
                <div
                    className={style.content_bg}
                    style={{ height: `${40}px`, backgroundColor: "white" }}
                >
                </div>
                <div
                    className={style.content_bg}
                    style={{ height: `${40}px`, backgroundColor: "#F4F4F4" }}
                >
                </div>
                <div
                    className={style.content_bg}
                    style={{ height: `${40}px`, backgroundColor: "white" }}
                >
                </div>
                <div
                    className={style.content_bg}
                    style={{ height: `${90}px`, backgroundColor: "#F4F4F4" }}
                >
                </div>
                <div
                    className={style.content_bg}
                    style={{ height: `${40}px`, backgroundColor: "white" }}
                >
                </div>
            </div>
            <div className={style.user_conteiner}>
                {companyList}
            </div>
        </div>
    );
};