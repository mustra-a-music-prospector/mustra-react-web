import React, { useState, useEffect } from "react";
import { Button, Modal, Form, ModalHeader } from "reactstrap";
import "./CommentModule.css";
import WhiteInput from "atom/WhiteInput/WhiteInput";

const CommentModule = ({ handleCreateFeed, modal, toggle, artist, song, rank }) => {
    const backdrop = "static";
    const [comment, setComment] = useState();
    return (
        <Modal className="CommentModule" isOpen={modal} toggle={toggle} backdrop={backdrop} size="lg">
            <div className="comment-modal-wrapper">
                <div className="comment-modal-body">
                    <div className="stats-row">
                        <div className={"stats-col rank "}>
                            <div className={"rank-value " + rank}>{"B"}</div>
                        </div>
                        <div className="stats-col artist">
                            <span className="item-label ">가수</span>
                            <br />
                            <span className="item-value ">{"아이유"}</span>
                        </div>
                        <div className="stats-col song">
                            <span className="item-label ">곡</span> <br />
                            <span className="item-value ">{"너의의미"}</span>
                        </div>
                    </div>
                    <div className="input-row">
                        <input
                            placeholder="당신의 의견"
                            value={comment}
                            onChange={({ target: { value } }) => setComment(value)}
                            type="text"
                            maxLength="50"
                        ></input>
                        <div style={{ overflow: "hidden" }}>
                            <span id="limit"> [ {comment?.length} / 50 ]</span>
                        </div>
                    </div>
                    <div className="submit-row">
                        <button id="cancle" onClick={() => toggle()}>
                            취소하기
                        </button>
                        <button id="submit" onClick={() => handleCreateFeed()}>
                            작성하기
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CommentModule;
