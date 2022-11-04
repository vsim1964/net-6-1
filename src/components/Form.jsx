import {useState} from "react";
import PropTypes from "prop-types";
import Watch from "../model/Watch";

export default function Form({onAdd}) {

  const [form, setForm] = useState({
    title: '',
    timeZone: '',
  });

  const handleTitle = evt => {
    setForm(prevForm => ({...prevForm, title: evt.target.value}))
  }

  const handleTimeZone = evt => {
    setForm(prevForm => ({...prevForm, timeZone: evt.target.value}))
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const watch = new Watch(form.title, form.timeZone)
    onAdd(watch)
    setForm({
      title: '',
      timeZone: '',
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form">
          <label htmlFor="title">Имя зоны</label>
          <input type="text" id="title" name="title" value={form.title} onChange={handleTitle} />
          <label htmlFor="timeZone">Отклонение от GMT (например, +4)</label>
          <input type="text" id="timeZone" name="timeZone" value={form.timeZone} onChange={handleTimeZone} />
          <button type="submit">Добавить часы</button>
      </div>
    </form>
  )
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
