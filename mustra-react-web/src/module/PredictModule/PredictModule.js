import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import "./PredictModule.css";
import white_single_logo from "img/white-single-logo.png";
import white_full_logo from "img/white-full-logo.png";

//atoms
import WhiteInput from "atom/WhiteInput/WhiteInput";
import Loader from "atom/Loader/Loader";

//icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Page1 = ({ artist, setArtist, nextPage }) => {
    return (
        <Container className="content-inner">
            <div className="header-row">
                <img id="logo" src={white_full_logo}></img>
                <br />
            </div>
            <div className="item-row">당신이 궁금한 가수는?</div>

            <div className="item-row input-row">
                <WhiteInput hint={"가수이름"} value={artist} setValue={setArtist} onEnter={nextPage} />
                <div className="item-row">
                    <div onClick={() => nextPage()} className="right-col">
                        <span id="arrow-label">다음 : 곡이름 입력 </span> <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </Container>
    );
};
const Page2 = ({ artist, song, setSong, prevPage, goToResult }) => {
    return (
        <Container className="content-inner">
            <div className="header-row">
                <img id="logo" src={white_full_logo}></img>
                <br />
            </div>
            <div className="item-row">{artist}의 궁금한 곡은?</div>

            <div className="item-row input-row">
                <WhiteInput hint={"곡명"} value={song} setValue={setSong} onEnter={goToResult} />
                <div className="item-row">
                    <div onClick={() => prevPage()} className="left-col">
                        <ArrowBackIosIcon />
                        <span id="arrow-label"> 이전 : 가수 이름 입력</span>
                    </div>
                    <div onClick={() => goToResult()} className="right-col">
                        <span id="arrow-label">다음 : 곡이름 입력 </span> <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </Container>
    );
};

const Page3 = () => {
    return (
        <Container className="content-inner">
            <div className="header-row">
                <img id="logo" src={white_full_logo}></img>
                <br />
            </div>
            <div className="item-row">
                <Loader />
            </div>
        </Container>
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
                return <Page3 />;
            default:
                return <Page1 artist={artist} setArtist={setArtist} nextPage={nextPage} />;
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
            </div>
        </div>
    );
};

export default PredictModule;
