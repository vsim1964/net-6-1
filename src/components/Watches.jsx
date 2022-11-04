import {useState} from "react";
import Form from "./Form";
import WatchesList from "./WatchesList";

export default function Watches() {

  const [watches, setWatches] = useState([])

  const handleAdd = (watch) => {
    setWatches(prevState => [...prevState, watch]);
  }

  const handleDelete = (id) => {
    setWatches(prevState => prevState.filter(i => i.id !== id));
  }

  return (
    <div className="wrapper">
      <div>
        <Form onAdd={handleAdd} />
        <WatchesList list={watches} onDelete={handleDelete} />
      </div>
    </div>
  );
}
