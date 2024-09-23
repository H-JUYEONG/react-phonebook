//import 라이브러리
import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

//import css
import "../css/reset.css";

const EditForm = () => {

  /*---라우터 관련-------------------------------*/
  const {no} = useParams();
  const navigate = useNavigate();

  /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
  const [name, setName] = useState('');
  const [hp, setHp] = useState('');
  const [company, setCompany] = useState('');

  /*---일반 변수--------------------------------*/

  /*---일반 메소드 -----------------------------*/

  /*---훅(useEffect)+이벤트(handle)메소드-------*/
  // 로딩 -> 마운트 되었을때
  useEffect(() => {
    console.log("마운트 되었을때");
    console.log(no); // 서버로 no 값 보내서 no 데이터 받기 그리고 화면에 출력하기

    axios({
      method: 'get', 			// put, post, delete                   
      url: 'http://localhost:9000/api/persons/' + no,
  
      responseType: 'json' //수신타입
  }).then(response => {
      console.log(response); //수신데이타
      console.log(response.data); //수신데이타
      console.log(response.data.result);
      //console.log(response.apiData.name); 

      if(response.data.result === 'success') { 
        // 성공로직
        // useState 사용해서 값 대입
        setName(response.data.apiData.name);
        setHp(response.data.apiData.hp);
        setCompany(response.data.apiData.company);
      } else {
        // 실패로직 리스트로 보내기
        navigate("/list");

      }
  
  }).catch(error => {
      console.log(error);
  });
    
  }, []);

  // name 값이 변경되었을때
  const hadleName = (e) => {
    setName(e.target.value);
  };

  // hp 값이 변경되었을때
  const hadleHp = (e) => {
    setHp(e.target.value);
  };

  // company 값이 변경되었을때
  const hadleCompany = (e) => {
    setCompany(e.target.value);
  };

  // 수정버튼을 클릭했을때
  const handleUpdate = (e) => {
    e.preventDefault();

    const personVo = {
      name: name,
      hp: hp,
      company: company
    }

    axios({
      method: 'put', 			// put, post, delete                   
      url: 'http://localhost:9000/api/persons/' + no,

      headers: { "Content-Type": "application/json; charset=utf-8" },  // post put

      data: personVo,     // put, post,  JSON(자동변환됨)
  
      responseType: 'json' //수신타입
  }).then(response => {
      console.log(response); //수신데이타
      console.log(response.data); //수신데이타

      if(response.data.result === 'success') {
        //성공 로직
        navigate("/list");
      } else {
        alert(response.data.message);
      }
  
  }).catch(error => {
      console.log(error);
  });
  

  };
    
  return (
    <>
      <h1>전화번호부</h1>
      <br />

      <h2>전화번호-수정폼</h2>
      <br />

      <p>수정할 항목을 입력한 후 수정버튼을 클릭해 주세요</p>
      <br />

      <form action="" method="" onSubmit={handleUpdate}>
        <div>
          <label htmlFor="txt-name">이름(name): </label>
          <input id="txt-name" type="text" name="name" value={name} placeholder="이름" onChange={hadleName}/>
        </div>
		    <div>
          <label htmlFor="txt-hp">핸드폰(hp): </label>
          <input id="txt-hp" type="text" name="hp" value={hp} placeholder="핸드폰" onChange={hadleHp}/>
        </div>
		    <div>
          <label htmlFor="txt-company">회사(company): </label>
          <input id="txt-company" type="text" name="company" value={company} placeholder="회사" onChange={hadleCompany}/>
        </div>
		    <input type="hidden" name="personId" value=""></input>
		    <br/>
		    <button type="submit">수정(전송)</button>
      </form>
	    <br/><br/>
	    <Link to="/list" rel="noreferrer noopener">리스트로 가기</Link>
    </>
  );
};
export default EditForm;
