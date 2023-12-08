const Form=(props)=>{

  const handleInput=(e)=>{
    props.onChangeInput(e)
  }

  const submitForm=(e)=>{
    props.onFormSubmit(e)
  }


  return(
    <div className="form">
          <form onSubmit={submitForm}>
            <h2>itemCard details</h2>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input  name="title" type="text" placeholder="enter title" value={props.item.title} onChange={handleInput}required></input>
            </div>
            <div className="input-field">
              <label htmlFor="price">Price</label>
              <input name="price" type="text" placeholder="enter price" value={props.item.price} onChange={handleInput} ></input>
            </div>
            <div className="input-field">
              <label htmlFor="discount">discount</label>
              <input name="discount" type="text" placeholder="enter dicount" value={props.item.discount} onChange={handleInput}></input>
            </div>
            <div className="input-field">
              <label htmlFor="thumbnail">thumbnail</label>
              <input name="thumbnail" type="text" placeholder="enter thumbnail" value={props.item.thumbnail} onChange={handleInput} required></input>
            </div>
            <div className="submit-wrap">
            <button>Update</button>
            </div>
          </form>
        </div>
  )
}

export default Form