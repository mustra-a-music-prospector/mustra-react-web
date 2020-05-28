import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup } from "reactstrap";
import "./CommentModule.css";
import WhiteInput from "atom/WhiteInput/WhiteInput";
//icons
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import GavelIcon from "@material-ui/icons/Gavel";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";

const CommentModule = () => {
    const [modal, setModal] = useState(false);
    const backdrop = "static";
    const toggle = () => setModal(!modal);
    const [comment, setComment] = useState("");

    return (
        <React.Fragment>
            <Form>
                <Button color="secondary" onClick={toggle}>
                    Comment
                </Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} backdrop={backdrop}>
                <div className="comment-modal-wrapper">
                    <div className="comment-modal-header">결과에 대해 말해주세요</div>
                    <div className="comment-modal-body">
                        <div className="singer-result-box">
                            <KeyboardVoiceIcon style={{ fontSize: "28px", color: "lightgray" }} />
                            <sapn className="result-name">가수</sapn>
                            <span className="singer-result">아이유</span>
                        </div>

                        <div className="song-result-box">
                            <AudiotrackIcon style={{ fontSize: "28px", color: "lightgray" }} />
                            <sapn className="result-name">노래 제목</sapn>
                            <span className="song-result">너의 의미</span>
                        </div>
                        <div className="rank-result-box">
                            <EmojiEventsIcon style={{ fontSize: "35px", color: "yellow" }} />
                            <sapn className="result-name">랭크</sapn>
                            <span className="rank-result">A</span>
                        </div>
                        <WhiteInput value={comment} setValue={setComment}></WhiteInput>
                    </div>
                    <div className="comment-modal-footer">
                        <button onClick={toggle}>Submit</button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default CommentModule;
