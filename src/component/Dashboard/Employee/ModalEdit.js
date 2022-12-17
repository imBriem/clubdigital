import React from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,Input,Label} from 'reactstrap'

function ModalEdit(params) {

   const [state, setState] = React.useState(false);

  const abrirModal=()=>{
    setState(true);
   }
    
    return(
        <div className="principal">
            <div className="secundario">
                <Modal isOpen={state}>

                    <ModalHeader>
                        EDITAR EMPLEADO
                    </ModalHeader>
                    <ModalBody>
                        CAMPOS REGISTRO
                    <br/>
                    <Button color="success">Edit</Button>
                    </ModalBody>
                    <ModalFooter>
                        
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
}

export default ModalEdit;