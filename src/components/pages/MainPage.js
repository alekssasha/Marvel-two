import { useState } from "react";

import CharSearchForm from "../charSearchForm/CharSearchForm";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";





const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <RandomChar />
            <div className="char__content">
                <CharList onCharSelected={onCharSelected} />
                <div>
                    <CharInfo charId={selectedChar} />
                    <CharSearchForm/>
                </div>
            </div>
        </>
    )
}

export default MainPage;