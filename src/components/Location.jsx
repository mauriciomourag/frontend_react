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
        const newList = [{ key: 0, value: "Selecione..." }];
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
        <div className="container border-white bg-white m-3 p-3 bottom-4 w-[450px] bg-rose-50 ">
            <div className="flex justify-between p-3 text-[18px]">
            <h1 className="text-primary text-[18px] font-bold">Estado</h1>
            <select name="estados" onChange={updateCity}>
                {state.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    );
                })}
            </select>
            </div>
            <div className="flex justify-between p-3 text-[18px]">
                <h1 className="text-primary text-[18px] font-bold ">Cidade</h1>
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
        </div>
    )
}
