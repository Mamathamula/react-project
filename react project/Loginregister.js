
import React from 'react';

function Loginregister() {
  return (
    <div className='content d-flex justify-content-center align-items-center shadow-lg' id='content'>
      <div className='col-md-6 d-flex justify-content-center'>
        <form>
          <div className='header-text mb-4' >
            <h1>create account</h1>
          </div>
          <div className='input-group mb-3'>
            <input type='text' placeholder='Name' className='form-control form-control-lg bg-light'></input>
          </div>
          <div className='input-group mb-3'>
            <input type='Email' placeholder='Email' className='form-control form-control-lg bg-light'></input>
          </div>
          <div className='input-group mb-3'>
            <input type='Password' placeholder='Password' className='form-control form-control-lg bg-light'></input>
          </div>
          <div className='input-group mb-3 justify-content-center'>
            <button className='btn border-white text-white w-50 fs-6'></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginregister;
