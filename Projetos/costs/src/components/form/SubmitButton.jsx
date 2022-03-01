import styles from './SubmitButton.module.css'

function SubmitButton({text}) {
    return (
      <div className={styles.btn_div}>
          <button className={styles.btn}>
              {text}
          </button>
      </div>
    );
}

export default SubmitButton
