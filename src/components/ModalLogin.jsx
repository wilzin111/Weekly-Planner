const background_style = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: '1000'
}

const modal_background = {
    width: '50%',
    height: '50%',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: '#33383D',
    borderRadius: '20px',
    textAlign: 'center',
    fontSize: '20px',
    color: '#fff'
}

const buttomModalL = {
    width: '250px',
    height: '67px',
    marginTop: '82px',
    background: 'linear-gradient(90deg, #17862c 0%, #17862c 100%)',
    boxShadow: 'inset 5px 5px 15px rgba(0, 0, 0, 0.15)',
    color: '#fff',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '40px',
    border: 'none',
    borderRadius: '50px'
}

const buttom2ModalL = {
    width: '250px',
    height: '67px',
    marginTop: '82px',
    background: 'linear-gradient(90deg, #FF2D04 0%, #C13216 100%)',
    boxShadow: 'inset 5px 5px 15px rgba(0, 0, 0, 0.15)',
    color: '#fff',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '40px',
    border: 'none',
    borderRadius: '50px',
    marginLeft: '20px'
}

export function ModalLogin({ e, children, setCloseModal,navigateML }) {
    if (e) {
        return (
            <div>
                <div style={background_style}>
                    <div style={modal_background}>{children}
                        <button style={buttomModalL} onClick={setCloseModal}>I already have an account!</button>
                        <button style={buttom2ModalL} onClick={navigateML} >Register a new account</button>
                    </div>

                </div>
            </div>


        )
    }

}
