import { useEffect, useState } from "react";

export default function Location() {
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    useEffect(() => {
        const newList = [{ key: 0, value: "Selecione..." }];
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            .then(result => result.json())
            .then(data => {
                data.forEach(item => {
                    newList.push({ key: item.id, value: item.nome });
                });
                setState(newList);
            });
        setCity([]);
        console.log("useEffect");
    }, []);

    function updateCity(event) {
        const uf = event.target.value;
        console.log(uf);
        const newList = [];
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(result => result.json())
            .then(data => {
                data.forEach(item => {
                    newList.push({ key: item.id, value: item.nome });
                });
                setCity(newList);
            });
    }

    return (
        <div className="container">
            <select name="estados" onChange={updateCity}>
                {state.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    );
                })}
            </select><br />
            <select name="municipios">
                {city.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}
