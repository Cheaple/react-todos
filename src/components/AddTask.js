import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a todo')
      return
    }
    if (!time) {
      alert('Please enter a time')
      return
    }

    onAdd({text, time, reminder})
    setText('')
    setTime('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={time}
          onChange={(e) => setTime(e.target.value)} 
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          value = {reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask
