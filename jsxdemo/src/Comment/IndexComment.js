import React from "react";
import ReactDOM from "react-dom";
import facker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const AppComponent = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name={facker.name.firstName()}
          image={facker.image.avatar()}
          comment={facker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={facker.name.firstName()}
          image={facker.image.avatar()}
          comment={facker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={facker.name.firstName()}
          image={facker.image.avatar()}
          comment={facker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<AppComponent />, document.querySelector("#root"));
