export default function Profile(props){
    return(
        <>
        <table>
            <tr>
                <td rowSpan={7}>
                    <img className='profile' src={require('../assets/img/1.jpg')} alt="Profile picture"/>
                </td>
                <td>ID {props.stu.studentId}</td>
            </tr>
        </table>
        </>
    );
}