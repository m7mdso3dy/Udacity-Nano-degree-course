import React,{useState} from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const ItemsForm = props => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

  const handleChange = event => {
    setValue( event.target.value );
  };

    const addItem = event => {
        event.preventDefault();
        console.log(value)
        setItems(prevState => ({
            ...prevState,
            value

        }));
        setValue('');
    };

  const deleteLastItem = event => {
    setItems(prevState => (
        prevState.slice(0, -1) 
      )
    );
  };

  const inputIsEmpty = () => {
    return value === '';
  };

  const noItemsFound = () => {
    return items.length === 0;
  };
    return (
        <form onSubmit={addItem}>
          <Input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
            />
          <Button
                disabled={inputIsEmpty()}
                onClick={addItem}
            >Add</Button>
        </form>
    )
}

export default ItemsForm;