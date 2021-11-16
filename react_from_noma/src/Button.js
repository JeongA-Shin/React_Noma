import PropTypes from "prop-types"; //prop-types는 npm으로 install함
import styles from "./Button.module.css"//버튼 css 파일의 내용을 styles라는 자바스크립트 객체로 변환해줌
//왜냐면 우리는 단순히 css가 아니라 css module을 사용했으므로('.module.css')

function Button({text}){//파라미터는 App으로부터 전달받을 props
    return(
        <div>
            {/*따라서 button의 className을 정할 때는 css파일의 내용도 적용될 수 있도록 css 파일 객체의 클래스명을 활용함.
             styles.btn으로 해줌 (class라고 하면 안 됨. 그건 html이고 지금은 jsx임) */}
            <button className={styles.btn}>{text}</button>
        </div>
    );
}

Button.propTypes={
    text:PropTypes.string.isRequired
}

export default Button; //외부에서 이 파일(컴포넌트-파일당 하나의 컴포넌트임)을 Button이라는 이름으로 쓸 수 있도록