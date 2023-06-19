import { useState } from 'react'
import { db } from '../FireBaseConnection'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { error, success } from '../hooks/Alerts'
import './CreateTask.css'

export const CreateTask = () => {
    const [description, setDescription] = useState('')
    const [weekDay, setWeekDay] = useState('')
    const [hour, setHour] = useState('')
    const userUid = localStorage.getItem("userLogado")

    const handleChangeWeekDay = (weekDay) => {
        setWeekDay(weekDay.target.value)
    }

    const handleChangeHour = (hour) => {
        setHour(hour.target.value)
    }

    async function registerTask() {
        if (description === '' || weekDay === '' || hour === '') {
            error("Preencha os campos antes de salvar")
            return
        }
        await addDoc(collection(db, "tasks"), {
            userUid: userUid,
            descrição: description,
            diaSemana: weekDay,
            hora: hour
        })
            .then(() => {
                success("Tarefa salva com sucesso ")
                setDescription("")
                setWeekDay('')
                setHour('')
            })
            .catch(() => {
                error("Falha ao salvar a tarefa tente novamente")
            })
    }

    async function deleteAll() {
        const task = collection(db, "tasks")
        await getDocs(task)

            .then((snapshot) => {
                success("tasks deletadas")
                const lista = []
                snapshot.forEach((doc) => {
                    let uidTask = doc.data().userUid
                    if (uidTask == userUid) {
                        lista.push({
                            id: doc.id
                        })
                    }
                })
                for (let i = 0; i < lista.length; i++) {
                    const element = lista[i];
                    const taskDelete = doc(db, "tasks", element.id)
                    deleteDoc(taskDelete)
                }
            })
    }
    const [maiorBtn, setMaiorBtn] = useState('Monday')





    return (
        <div className='create_task'>
            <div className='conteinet_top'>
                <input className='description'
                    type="text"
                    placeholder='Task or issue'
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select className='weekDay'
                    name="weekDay"
                    id="weekDay"
                    value={weekDay}
                    onChange={handleChangeWeekDay}
                >
                    <option value="Sun">Sunday</option>
                    <option value="Mon">Monday</option>
                    <option value="Tue">Tuesday</option>
                    <option value="Wed">Wednesday</option>
                    <option value="Thu">Thursday</option>
                    <option value="Fri">Friday</option>
                    <option value="Sat">Saturday</option>
                </select>
                <select className='hora'
                    name="hora"
                    id="time"
                    value={hour}
                    onChange={handleChangeHour}
                >
                    <option value="00:00">00:00</option>
                    <option value="00:15">00:15</option>
                    <option value="00:30">00:30</option>
                    <option value="00:45">00:45</option>
                    <option value="01:00">01:00</option>
                    <option value="01:15">01:15</option>
                    <option value="01:30">01:30</option>
                    <option value="01:45">01:45</option>
                    <option value="02:00">02:00</option>
                    <option value="02:15">02:15</option>
                    <option value="02:30">02:30</option>
                    <option value="02:45">02:45</option>
                    <option value="03:00">03:00</option>
                    <option value="03:15">03:15</option>
                    <option value="03:30">03:30</option>
                    <option value="03:45">03:45</option>
                    <option value="04:00">04:00</option>
                    <option value="04:15">04:15</option>
                    <option value="04:30">04:30</option>
                    <option value="04:45">04:45</option>
                    <option value="05:00">05:00</option>
                    <option value="05:15">05:15</option>
                    <option value="05:30">05:30</option>
                    <option value="05:45">05:45</option>
                    <option value="06:00">06:00</option>
                    <option value="06:15">06:15</option>
                    <option value="06:30">06:30</option>
                    <option value="06:45">06:45</option>
                    <option value="07:00">07:00</option>
                    <option value="07:15">07:15</option>
                    <option value="07:30">07:30</option>
                    <option value="07:45">07:45</option>
                    <option value="08:00">08:00</option>
                    <option value="08:15">08:15</option>
                    <option value="08:30">08:30</option>
                    <option value="08:45">08:45</option>
                    <option value="09:00">09:00</option>
                    <option value="09:15">09:15</option>
                    <option value="09:30">09:30</option>
                    <option value="09:45">09:45</option>
                    <option value="10:00">10:00</option>
                    <option value="10:15">10:15</option>
                    <option value="10:30">10:30</option>
                    <option value="10:45">10:45</option>
                    <option value="11:00">11:00</option>
                    <option value="11:15">11:15</option>
                    <option value="11:30">11:30</option>
                    <option value="11:45">11:45</option>
                    <option value="12:00">12:00</option>
                    <option value="12:15">12:15</option>
                    <option value="12:30">12:30</option>
                    <option value="12:45">12:45</option>
                    <option value="13:00">13:00</option>
                    <option value="13:15">13:15</option>
                    <option value="13:30">13:30</option>
                    <option value="13:45">13:45</option>
                    <option value="14:00">14:00</option>
                    <option value="14:15">14:15</option>
                    <option value="14:30">14:30</option>
                    <option value="14:45">14:45</option>
                    <option value="15:00">15:00</option>
                    <option value="15:15">15:15</option>
                    <option value="15:30">15:30</option>
                    <option value="15:45">15:45</option>
                    <option value="16:00">16:00</option>
                    <option value="16:15">16:15</option>
                    <option value="16:30">16:30</option>
                    <option value="16:45">16:45</option>
                    <option value="17:00">17:00</option>
                    <option value="17:15">17:15</option>
                    <option value="17:30">17:30</option>
                    <option value="17:45">17:45</option>
                    <option value="18:00">18:00</option>
                    <option value="18:15">18:15</option>
                    <option value="18:30">18:30</option>
                    <option value="18:45">18:45</option>
                    <option value="19:00">19:00</option>
                    <option value="19:15">19:15</option>
                    <option value="19:30">19:30</option>
                    <option value="19:45">19:45</option>
                    <option value="20:00">20:00</option>
                    <option value="20:15">20:15</option>
                    <option value="20:30">20:30</option>
                    <option value="20:45">20:45</option>
                    <option value="21:00">21:00</option>
                    <option value="21:15">21:15</option>
                    <option value="21:30">21:30</option>
                    <option value="21:45">21:45</option>
                    <option value="22:00">22:00</option>
                    <option value="22:15">22:15</option>
                    <option value="22:30">22:30</option>
                    <option value="22:45">22:45</option>
                    <option value="23:00">23:00</option>
                    <option value="23:15">23:15</option>
                    <option value="23:30">23:30</option>
                    <option value="23:45">23:45</option>
                </select>
                <button className='add btn_task' onClick={registerTask}>+Add to calendar</button>
                <button className='delete_all btn_task' onClick={deleteAll}>- Delete All</button>
            </div>
            <div className='conteiner_bnt_bottom'>

                <button id='Monday'
                    value="Mon" onClick={() => setMaiorBtn('Monday')}
                    className={maiorBtn === 'Monday' ? 'tamanho btnWeekDay' : 'btnWeekDay'}
                >Monday</button>

                <button id='Tuesday'
                    value="Tue" onClick={() => setMaiorBtn('Tuesday')}
                    className={maiorBtn === 'Tuesday' ? 'tamanho btnWeekDay' : 'btnWeekDay'}
                >Tuesday</button>

                <button id='Wednesday'
                    value="Wed" onClick={() => setMaiorBtn('Wednesday')}
                    className={maiorBtn === 'Wednesday' ? 'tamanho btnWeekDay' : 'btnWeekDay'}
                >Wednesday</button>

                <button id='Thursday'
                    value="Thu" onClick={() => setMaiorBtn('Thursday')}
                    className={maiorBtn === 'Thursday' ? 'tamanho btnWeekDay' : 'btnWeekDay'}
                >Thursday</button>

                <button id='Friday'
                    value="Fri" onClick={() => setMaiorBtn('Friday')}
                    className={maiorBtn === 'Friday' ? 'tamanho btnWeekDay' : 'btnWeekDay'}
                >Friday</button>

                <button id='Saturday'
                    value="Sat" onClick={() => setMaiorBtn('Saturday')}
                    className={maiorBtn === 'Saturday' ? 'tamanho btnWeekDay' : 'btnWeekDay'}
                >Saturday</button>

                <button id='Sunday'
                    value="Sun" onClick={() => setMaiorBtn('Sunday')}
                    className={maiorBtn === 'Sunday' ? 'tamanho btnWeekDay' : 'btnWeekDay'}
                >Sunday</button>

            </div>
            <div className='mostrar_task'>
                <div className='container_time'>
                    Time
                </div>
                <div className="container_tasks">
                    <div className="conteiner_time_task">
                        10h30m
                    </div>
                    <div className="container_task">

                        <div className='conteiner_cor'></div>
                        <div className='container_p'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita perspiciatis aperiam, dolores
                            </p>
                        </div>
                        <button>
                            Delete
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}
