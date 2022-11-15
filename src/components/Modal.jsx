import closeb from '../images/close.png'
import metamask from '../images/metamask.png'
import wallet from '../images/walletconnet.png'

const Modal = ({open, close}) => {


    return (
        <dialog onClick={close} id="myModal" className="modal" open={open}>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modal-content">
                <button onClick={close} className="close"><img src={closeb} alt="close-btn" /></button>
                <h1>Connect Wallet:</h1>
                <hr className="hr" />
                <p>Choose your preferred wallet:</p>
                <div className="wallets">
                    <img src={metamask} alt="crypto-coin" />
                </div>
                <div className="wallets">
                    <img src={wallet} alt="crypto-coin" />
                </div>
            </div>
        </dialog>)
}

export default Modal