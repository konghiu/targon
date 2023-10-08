import React from "react";
import Skeleton from "../skeleton/Skeleton";

const TitlePage = () => {
    return (
        <section className="w-full h-full bg-white flex justify-center">
            <Skeleton>
                <strong className="text__main ">TITLE PAGE</strong>
            </Skeleton>
        </section>
    );
};

export default TitlePage;
