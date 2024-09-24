//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

const ItemPerson = (props) => {
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )-----*/
    const {person, delPerson} = props;
    
    /*---일반변수-----------------------------------*/
     
    /*---일반 메소드 -------------------------------*/
    
    /*---생명주기 + 이벤트 관련 메소드(handle메소드)--*/

    return (   
        <>
            <table id="list">
				<tbody>
					<tr>
						<th>이름(name)</th>
						<td>{person.name}</td>
					</tr>
					<tr>
						<th>핸드폰(hp)</th>
						<td>{person.hp}</td>
					</tr>
					<tr>
						<th>회사(company)</th>
						<td>{person.company}</td>
					</tr>
					<tr>
						<td><Link to={`/editform/${person.personId}`} rel="noreferrer noopener">수정폼으로 이동</Link></td>
						<td><button type="button" onClick={()=>{delPerson(person.personId)}}>삭제</button></td>
					</tr>
				</tbody>
			</table>
		<br/>
        </>
    );
}

export default ItemPerson;