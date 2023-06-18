import { HeaderPanel } from '../../components/HeaderPlaner'
import { CreateTask } from '../../components/CreateTask'
import './Planer.css'


const Panel = () => {
    return (
        <div className='conteiner_panel'>
            <HeaderPanel/>
            <CreateTask/>
        </div>
    )
}

export default Panel