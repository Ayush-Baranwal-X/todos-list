import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (title.length === 0 || desc.length === 0) {
            alert("Title or Description can't be empty");
        }
        else {
            props.onAdd(title, desc);
            setTitle("");
            setDesc("");
            // alert("Success");
        }
    };

    const resetx = (e) => {
        e.preventDefault();
        setTitle("");
        setDesc("");
    }

    return (
        <div className='container' style={{ alignContent: 'center', width: props.mobile === false ? '40%' : '90%'}}>
            <form onSubmit={submit}>
                <h3 style={{marginTop:'2%'}}>Add a Todo</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="titleHelp" />
                    <div id="descHelp" className="form-text">Add a description for better clarity</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" rows={5} />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-dark" style={{ marginRight: "10px", marginBottom: "5px" }}>Add Todo</button>
                <button type="reset" className="btn btn-dark" onClick={resetx} style={{ width: "100px", marginBottom: "5px" }}>Clear</button>
            </form>
        </div>
    )
}

export default AddTodo
