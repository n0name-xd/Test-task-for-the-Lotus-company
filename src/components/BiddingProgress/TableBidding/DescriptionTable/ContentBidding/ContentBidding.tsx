import style from "./ContentBidding.module.css";
import { UserBidding } from "./UserBidding/UserBidding";
import { dataCompany } from "../../../../../dataBidding/dataCompanys";
import { useMemo, useState } from "react";
import { createTamplate } from "../../../../../helpers/tamplatesTime/createTamplate";

export const ContentBidding: React.FC = () => {

    let [position, setPosition] = useState<number>(0);

    const participantSwitchingPattern = useMemo(() => createTamplate(dataCompany), []);

    function next(arrTamplate: any, arrUsers: any) {
        let dateNow = new Date().getUTCMinutes();

        for (let i = 0; i < arrTamplate.length; i++) {
            if (arrTamplate[i].time.from === dateNow || dateNow === arrTamplate[i].time.from + 1) {
                setPosition(position = arrTamplate[i].position)
            };
        };
    };

    (() => {
        setInterval(() => {
            next(participantSwitchingPattern, dataCompany)
        }, 1000)
    })();

    const companyList = dataCompany.map((company, index, arr) => {
        return (
            <UserBidding
                key={company.compamyName}
                companyDescription={company}
                isTimer={position === index ? true : false}
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