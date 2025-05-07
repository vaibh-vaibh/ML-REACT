import axios from 'axios';
import React,{useState} from 'react'

const Model = () => {
    const [area, setArea] = useState('');
    const [prediction, setPrediction] = useState(null);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
        const res = await axios.post('http://localhost:5000/predict', {area: parseFloat(area)});
        setPrediction(res.data.prediction);
    }
    catch(err)
    {
        alert("Backend error: "+err.message);
    }
};

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🏠 House Price Predictor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Enter Area (in sqft)</label>
          <input
            type="number"
            className="form-control"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Predict Price</button>
      </form>
      {prediction !== null && (
        <div className="alert alert-success mt-4">
          💰 Predicted Price: <strong>{prediction} Lakhs</strong>
        </div>
      )}
    </div>
  )
}

export default Model