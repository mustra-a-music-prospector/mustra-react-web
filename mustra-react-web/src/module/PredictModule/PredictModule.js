import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import "./PredictModule.css";
import white_single_logo from "img/white-single-logo.png";
import white_full_logo from "img/white-full-logo.png";
import { GOOGLE_GET, NAVER_GET } from "rest";
import axios from "axios";
//atoms
import WhiteInput from "atom/WhiteInput/WhiteInput";
import Loader from "atom/Loader/Loader";

//icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Page1 = ({ artist, setArtist, nextPage }) => {
    const [nextAble, setNextAble] = useState(false);
    return (
        <div className="fade-div">
            <div className="item-row">당신이 궁금한 가수는?</div>
            <div className="item-row input-row">
                <WhiteInput
                    hint={"가수이름"}
                    value={artist}
                    setValue={setArtist}
                    onEnter={nextPage}
                    setNextAble={setNextAble}
                />
                <div className="item-row">
                    {nextAble ? (
                        <div className="right-col" onClick={() => nextPage()}>
                            <span id="arrow-label">다음 : 곡이름 입력 </span> <ArrowForwardIosIcon />{" "}
                        </div>
                    ) : (
                        <span id="arrow-label"> 두글자 이상 입력하세요</span>
                    )}
                </div>
            </div>
        </div>
    );
};
const Page2 = ({ artist, song, setSong, prevPage, goToResult }) => {
    const [nextAble, setNextAble] = useState(false);

    return (
        <div className="fade-div">
            <div className="item-row">{artist}의 궁금한 곡은?</div>

            <div className="item-row input-row">
                <WhiteInput
                    hint={"곡명"}
                    value={song}
                    setValue={setSong}
                    onEnter={goToResult}
                    setNextAble={setNextAble}
                />
                <div className="item-row">
                    {nextAble ? (
                        <div className="right-col" onClick={() => goToResult()}>
                            <span id="arrow-label">다음 : 예측하기 </span> <ArrowForwardIosIcon />{" "}
                        </div>
                    ) : (
                        <span id="arrow-label"> 두글자 이상 입력하세요</span>
                    )}
                </div>
            </div>
        </div>
    );
};

const Page3 = ({ artist, song }) => {
    // const getByGoogle = async () => {
    //     const data = await NAVER_GET(artist);
    //     if (data) {
    //         console.log(data);
    //     }
    // };
    // const get = () => {
    //     axios.get("https://www.google.com/search?q=" + artist).then((response) => console.log(response));
    // };
    // useEffect(() => {
    //     console.log("test");
    //     getByGoogle();
    //     get();
    // }, [1]);
    return (
        <div className="fade-div">
            <div className="item-row">
                가수 이름 : {artist}
                <br />곡 이름 : {song}
            </div>
            <div className="item-row">
                <Loader />
            </div>
        </div>
    );
};

const ResultPage = () => {
    const artist = "아이유";
    const song = "좋은날";
    const rank = "A";

    return (
        <div className="fade-div">
            <div className="item-row result">
                <span id="item-label">가수</span>
                <br />
                <span id="item-value">{artist}</span>
            </div>
            <div className="item-row result">
                <span id="item-label">곡</span>
                <br />
                <span id="item-value">{song}</span>
            </div>
            <div className="item-row result">
                <span id="item-label">랭크</span>
                <br />
                <span id="rank">{rank}</span>
                <br />
                <span id="item-label">해당 랭크는 인공지능 학습의 결과입니다</span>
            </div>
            <div className="item-row opinion">의견 작성</div>
        </div>
    );
};

class RenderNowPage extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.page !== nextProps.page;
    }
    render() {
        const { artist, setArtist, song, setSong, page, nextPage, prevPage, goToResult } = this.props;
        switch (page) {
            case 1:
                return <Page1 artist={artist} setArtist={setArtist} nextPage={nextPage} />;
            case 2:
                return (
                    <Page2 goToResult={goToResult} prevPage={prevPage} artist={artist} song={song} setSong={setSong} />
                );
            case 3:
                return <Page3 artist={artist} song={song} />;
            default:
                return <ResultPage />;
            // default:
            //     return <Page1 artist={artist} setArtist={setArtist} nextPage={nextPage} />;
        }
    }
}
const PredictModule = () => {
    const [artist, setArtist] = useState();
    const [song, setSong] = useState();
    const [page, setPage] = useState(1);
    const nextPage = () => setPage(2);
    const prevPage = () => setPage(1);
    const goToResult = () => setPage(3);

    return (
        <div className="PredictModule">
            <div className="black-mask">
                <Container className="content-inner">
                    <div className="header-row">
                        <img id="logo" src={white_full_logo}></img>
                        <br />
                    </div>
                    <RenderNowPage
                        artist={artist}
                        setArtist={setArtist}
                        song={song}
                        setSong={setSong}
                        page={page}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        goToResult={goToResult}
                    />
                </Container>
            </div>
        </div>
    );
};

export default PredictModule;
