import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [info, setInfo] = useState({
    tmb: '',
    tmt: '',
    age: '',
    height: '',
    weight: '',
    defict: '0',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let infos = {}
    if(name == 'activityLevel'){
      infos = {...info, [name]: value, tmt: info.tmb * value}
    }else{
      infos = { ...info, [name]: value }
    }
    if(name == 'gender'){
      infos['activityLevel'] = null
    }
    setInfo(infos);
  };

  const handleSaveInfos = (e) => {

    let weight = info.gender == 'male' ? (13.75 * parseInt(info.weight)) : (9.56 * parseInt(info.weight))
    let height =  info.gender == 'male' ? ( 5 * parseInt(info.height)) : ( 1.85 * parseInt(info.height))
    let age =  info.gender == 'male' ? ( 6.75 * parseInt(info.age)) : ( 4.68 * parseInt(info.age))
    let factor = info.gender == 'male' ? 66.5 : 65.71 
    let result = weight + height - age + factor

    // let result = (13,75 * info.weight) + ( 5 + info.height ) - ( 6,75 * info.age ) + 66.5 
    // let result = (13.75 * parseInt(info.weight)) + ( 5 * parseInt(info.height)) - ( 6,75 * parseInt(info.age)) + 66.5 
    info.tmb = result
    setInfo({...info, tmb: result});

    e.preventDefault();
    localStorage.setItem("info", JSON.stringify(info));
  };

  useEffect(() => {
    const storedData = localStorage.getItem('info');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setInfo(parsedData);
    }
  }, []);


  return (
    <div className="App">
      <h1>Calc Calorias</h1>
      <form onSubmit={handleSaveInfos}>
        Sexo: 
        <label><input type="radio" name="gender" value="male" onChange={handleChange} checked={info.gender === 'male'}/> Masculino </label>
        <label><input type="radio" name="gender" value="female" onChange={handleChange} checked={info.gender === 'female'}/> Feminino </label>
        <br/>
        <label> Idade: <input type="text" name="age" value={info.age} onChange={handleChange} /> </label><br />
        <label> Altura(em cm): <input type="text" name="height" value={info.height} onChange={handleChange} /> </label><br />
        <label> Peso(kg): <input type="text" name="weight" value={info.weight} onChange={handleChange} /> </label><br />
        <label> Acrescimo/Decrescimo(em Kcal): <input type="text" name="defict" value={info.defict} onChange={handleChange} /> </label><br />

        Nivel de atividade:
        <label><input type="radio" name="activityLevel" value="1.3" onChange={handleChange} checked={info.activityLevel === '1.3'}/> Leve </label>
        <label><input type="radio" name="activityLevel" value="1.5" onChange={handleChange} checked={info.activityLevel === '1.5'} /> Moderada</label>
        <label><input type="radio" name="activityLevel" value="1.7" onChange={handleChange} checked={info.activityLevel === '1.7'} /> Intenso</label><br/>
        
        <button type="submit">Salvar</button>
        <br/>


        <label> Taxa Metabólica Basal(TMB): {info.tmb} </label><br />
        Necessidade de caloria(TMT): {( info.tmt - 0 ).toFixed(2) } (Kcal)
        <br/>
        <br/>
        { info.weight }kg x 2gr = { info.weight * 2}gr de proteína. 
        <br/>
        { info.weight }kg x 1gr = { info.weight * 1}gr de gordura. 

        
         <br/>
        <br/>
        Proteina Total: { (info.weight * 2 ) * 4}Kcal
        <br/>
        Gordura Total: { (info.weight * 1 ) * 9}Kcal
        <br/>
        Carbohidrato: { (info.tmt - (((info.weight * 2 ) * 4 ) + (info.weight * 1 ) * 9)).toFixed(2) } Kcal

        <br/>
        {/* Totalizando:  { ((info.weight * 2 ) * 4 ) + (info.weight * 1 ) * 9} kcal */}


        <br/>
        Proteina(Kcal) - Gordura(Kcal) - TMT(Kcal) = Carbohidrato(Kcal)
        <br/>
        {/* { ((info.weight * 2 ) * 4 ) + (info.weight * 1 ) * 9} kcal - {info.tmt} = { (info.tmt - (((info.weight * 2 ) * 4 ) + (info.weight * 1 ) * 9)).toFixed(2) } Kcal */}
        {/* <br/> */}
        <br/>
        {/* { (info.tmt - (((info.weight * 2 ) * 4 ) + (info.weight * 1 ) * 9)).toFixed(2) } / 4 = { ((info.tmt - (((info.weight * 2 ) * 4 ) + (info.weight * 1 ) * 9)) / 4 ).toFixed(2) } gr de Carboidrato */}
        
        {/* <br/> */}
        {/* <br/> */}

        Ingerir:
        <br/>
        Carboidrato: { ((  ((info.tmt + parseInt(info.defict))) - (((info.weight * 2 ) * 4 ) + (info.weight * 1 ) * 9)) / 4 ).toFixed(2) }gr
        <br/>
        Proteína: { info.weight * 2}gr
        <br/>
        Gordura: { info.weight * 1}gr 
        <br/>


        
      </form>
    </div>
  )
}

export default App


{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}