import React from 'react';

export default function LabelTemplate({ title, name, value, onChange, type, array }) {
  return (
    <label>
      { title }
      { array && 
        <select name="category" onChange={(e) => onChange(e)}>
          { array.map((pos, i) => <option key={i} value={pos}>{pos}</option>) }
        </select>
      }
      { !array && 
      <input
      type={ type }
      name={ name }
      value={ value }
      onChange={ (e) => onChange(e) }
      data-testid={name}
      /> }
    </label>
  );
}
