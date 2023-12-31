import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title, price
    },
    onSuccess: (order) => Router.push(`/tickets/[orderId]`, `/tickets/${order.id}`)
  });

  const onSubmit = e => {
    e.preventDefault();

    doRequest();
  }

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group mt-3">
          <label>Price</label>
          <input value={price} onChange={e => setPrice(e.target.value)} onBlur={onBlur} className="form-control"/>
        </div>
        {errors}
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default NewTicket;
