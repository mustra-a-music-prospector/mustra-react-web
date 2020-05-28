import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import "./PredictModule.css";
import white_single_logo from "img/white-single-logo.png";
import white_full_logo from "img/white-full-logo.png";
import { POST, CREATE_FEED } from "rest";
import axios from "axios";

//atoms
import WhiteInput from "atom/WhiteInput/WhiteInput";
import Loader from "atom/Loader/Loader";

//modules
import CommentModule from "module/CommentModule/CommentModule";

//icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Page1 = ({ artist, setArtist, nextPage }) => {
    // 가수 이름을 입력받는 페이지
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
    // 곡 제목을 입력받는 페이지
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
                            <span id="arrow-label">다음 : 팬 수 입력하기 </span> <ArrowForwardIosIcon />{" "}
                        </div>
                    ) : (
                        <span id="arrow-label"> 두글자 이상 입력하세요</span>
                    )}
                </div>
            </div>
        </div>
    );
};
const Page3 = ({ artist, fan, setFan, nextPage }) => {
    // fan 수를 입력받는 페이지
    const [nextAble, setNextAble] = useState(false);
    return (
        <div className="fade-div">
            <div className="item-row">{artist}의 팬은 몇명정도 있다고 생각하시나요?</div>
            <div className="item-row">
                <span id="item-label">잘 모르시겠다면 멜론에 검색해보는 건 어떨까요?</span>
            </div>

            <div className="item-row input-row">
                <WhiteInput
                    type={"number"}
                    hint={"팬 수"}
                    value={fan}
                    setValue={setFan}
                    onEnter={nextPage}
                    setNextAble={setNextAble}
                />
                <div className="item-row">
                    <div
                        onClick={() => {
                            setFan("?");
                            nextPage();
                        }}
                    >
                        모르겠습니다
                    </div>
                </div>
                <div className="item-row">
                    {nextAble ? (
                        <div className="right-col" onClick={() => nextPage()}>
                            <span id="arrow-label">다음 : 예측하기 </span> <ArrowForwardIosIcon />{" "}
                        </div>
                    ) : (
                        <span id="arrow-label"></span>
                    )}
                </div>
            </div>
        </div>
    );
};

const Page4 = ({ song, setMovie, nextPage }) => {
    // 뮤비 유무를 묻는 페이지
    return (
        <div className="fade-div">
            <div className="item-row">{song}에 뮤비가 있습니까?</div>
            <div className="item-row">
                <div
                    className="item-col"
                    onClick={() => {
                        setMovie("y");
                        nextPage();
                    }}
                >
                    Yes
                </div>
                <div
                    className="item-col"
                    onClick={() => {
                        setMovie("n");
                        nextPage();
                    }}
                >
                    No
                </div>
            </div>
        </div>
    );
};

const Loading = ({ artist, song }) => {
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

const ResultPage = ({ artist, song, fan, movie, toggle }) => {
    const rank = "A";
    if (!rank) {
        return <Loading />;
    }
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
            <div className="item-row opinion" onClick={() => toggle()}>
                의견 작성
            </div>
        </div>
    );
};

class RenderNowPage extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.page !== nextProps.page;
    }
    render() {
        const {
            artist,
            setArtist,
            song,
            setSong,
            fan,
            setFan,
            movie,
            setMovie,
            page,
            nextPage,
            prevPage,
            goToResult,
            toggle,
        } = this.props;
        switch (page) {
            case 1:
                return <Page1 artist={artist} setArtist={setArtist} nextPage={nextPage} />;
            case 2:
                return (
                    <Page2 goToResult={goToResult} prevPage={prevPage} artist={artist} song={song} setSong={setSong} />
                );
            case 3:
                return <Page3 artist={artist} fan={fan} setFan={setFan} nextPage={nextPage} />;
            case 4:
                return <Page4 song={song} setMovie={setMovie} nextPage={nextPage} />;
            case 5:
                return <ResultPage {...this.props} />;
            default:
                return <div>NOT FOUND</div>;
            // default:
            //     return <Page1 artist={artist} setArtist={setArtist} nextPage={nextPage} />;
        }
    }
}
const PredictModule = ({ scrollToFeed }) => {
    const [artist, setArtist] = useState();
    const [song, setSong] = useState();
    const [fan, setFan] = useState();
    const [movie, setMovie] = useState();
    const [rank, setRank] = useState("A");
    const [page, setPage] = useState(1);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(1);
    const goToResult = () => setPage(3);

    const handleCreateFeed = async (comment) => {
        const data = await POST(CREATE_FEED, {
            rank: rank,
            artistName: artist,
            songName: song,
            comment: comment,
        });
        if (data) {
            console.log(data);
            scrollToFeed();
        }
    };

    return (
        <div className="PredictModule">
            <CommentModule
                handleCreateFeed={handleCreateFeed}
                modal={modal}
                toggle={toggle}
                artist={artist}
                song={song}
                rank={rank}
            />
            <Container className="content-inner">
                <div className="header-row">
                    <img id="logo" src={white_full_logo}></img>
                    <br />
                </div>

                <div className="item-row">{page} / 5</div>

                <RenderNowPage
                    artist={artist}
                    setArtist={setArtist}
                    song={song}
                    setSong={setSong}
                    fan={fan}
                    setFan={setFan}
                    movie={movie}
                    setMovie={setMovie}
                    page={page}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    goToResult={goToResult}
                    toggle={toggle}
                />
            </Container>
        </div>
    );
};

export default PredictModule;
