//import 라이브러리
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

//import css
import "../css/reset.css";

const WriteForm = () => {

/*--- 상태관리 변수들(값이 변하면 화면 렌더링) ------------*/
const [name, setName] = useState('');
const [hp, setHp] = useState('');
const [company, setCompany] = useState('');

const navigate = useNavigate();

/*--- 일반변수 ------------------------------------------*/

/*--- 일반 메소드 ----------------------------------------*/

/*--- 생명주기 + 이벤트 관련 메소드(handle메소드) ----------*/
// 이름
const handleName = (e) => {
  console.log("이름 입력");
  setName(e.target.value);
}

// 핸드폰
const handleHp = (e) => {
  console.log("핸드폰 입력");
  setHp(e.target.value);
}

// 회사
const handleCompany = (e) => {
  console.log("회사 입력");
  setCompany(e.target.value);
}

// 저장
const handleAdd = (e) => {
  e.preventDefault();

  const personVo = {
    name: name,
    hp: hp,
    company: company
  }
  console.log(personVo);

  axios({
    method: 'post', 			// put, post, delete                   
    url: 'http://localhost:9000/api/persons',
    headers: { "Content-Type": "application/json; charset=utf-8" },
    data: personVo,

    responseType: 'json' //수신타입
  }).then(response => {
    console.log(response); //수신데이타
    console.log(response.data); //수신데이타

    if(response.data === 1) {
      //리다이렉트
      navigate("/list");
    } else {
      alert("등록 실패");
    }

  }).catch(error => {
    console.log(error);
});

}

  return (
    <>
      <h1>전화번호부</h1>
      <br />

      <h2>전화번호-등록폼</h2>
      <br />

      <p>아래의 항목을 입력한 후 등록버튼을 클릭해 주세요</p>
      <br />

      <form action="" method="">
        <div>
          <label htmlFor="txt-name">이름(name): </label>
          <input id="txt-name" type="text" name="name" value={name} placeholder="이름" onChange={handleName}/>
        </div>
		    <div>
          <label htmlFor="txt-hp">핸드폰(hp): </label>
          <input id="txt-hp" type="text" name="hp" value={hp} placeholder="핸드폰" onChange={handleHp} />
        </div>
		    <div>
          <label htmlFor="txt-company">회사(company): </label>
          <input id="txt-company" type="text" name="company" value={company} placeholder="회사" onChange={handleCompany}/>
        </div>
		    <br/>
		    <button type="submit" onClick={handleAdd}>등록(전송)</button>
      </form>
	    <br/><br/>
      <Link to="/List" rel="noreferrer noopener">리스트로 가기</Link>
    </>
  );
};
export default WriteForm;
