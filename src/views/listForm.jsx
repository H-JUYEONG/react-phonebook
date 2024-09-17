//import 라이브러리
import React from "react";
import { Link } from 'react-router-dom';

//import css
import '../css/reset.css'
import '../css/list.css'

const listForm = () => {
  
  return (
    <>
      <h1>전화번호부</h1><br/>

      <h2>전화번호-리스트</h2><br/>

      <p>등록된 전화번호리스트 입니다.</p><br/>

      <table id="list">
		<tbody>
			<tr>
				<th>이름(name)</th>
				<td>이효리</td>
			</tr>
			<tr>
				<th>핸드폰(hp)</th>
				<td>010-1111-1111</td>
			</tr>
			<tr>
				<th>회사(company)</th>
				<td>02-1111-1111</td>
			</tr>
			<tr>
				<td><Link to="/modifyForm" rel="noreferrer noopener">수정폼으로 이동</Link></td>
				<td><Link to="#" rel="noreferrer noopener">삭제</Link></td>
			</tr>
		</tbody>
	</table>
	<br/>
    <Link to="/writeForm" rel="noreferrer noopener">등록폼으로 이동</Link>
      
    </>
  );
};
export default listForm;
