
const Modal = ({open, close}) => {


    return (
        <dialog id="myModal" className="modal" open={open}>
            <div className="modal-content">
                <button onClick={close} className="close"><img src="images/close.png" alt="" /></button>
                <h1>Connect Wallet:</h1>
                <hr className="hr" />
                <p>Choose your preferred wallet:</p>
                <div className="wallets">
                    <img src="images\metamask.png" alt="" />
                </div>
                <div className="wallets">
                    <img src="images\walletconnet.png" alt="" />
                </div>
            </div>
        </dialog>)
}

export default Modal