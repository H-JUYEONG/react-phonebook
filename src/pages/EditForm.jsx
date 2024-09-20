//import 라이브러리
import React from "react";
import { Link } from "react-router-dom";

//import css
import "../css/reset.css";

const EditForm = () => {
  return (
    <>
      <h1>전화번호부</h1>
      <br />

      <h2>전화번호-수정폼</h2>
      <br />

      <p>수정할 항목을 입력한 후 수정버튼을 클릭해 주세요</p>
      <br />

      <form action="" method="get">
        <div>
          <label htmlFor="txt-name">이름(name): </label>
          <input id="txt-name" type="text" name="name" value="" placeholder="이름" />
        </div>
		    <div>
          <label htmlFor="txt-hp">핸드폰(hp): </label>
          <input id="txt-hp" type="text" name="hp" value="" placeholder="핸드폰" />
        </div>
		    <div>
          <label htmlFor="txt-company">회사(company): </label>
          <input id="txt-company" type="text" name="company" value="" placeholder="회사" />
        </div>
		    <input type="hidden" name="personId" value=""></input>
		    <br/>
		    <button type="submit">수정(전송)</button>
      </form>
	    <br/><br/>
	    <Link to="/List" rel="noreferrer noopener">리스트로 가기</Link>
    </>
  );
};
export default EditForm;
