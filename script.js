const url = 'https://raw.githubusercontent.com/CivilServiceUSA/us-states/master/data/states.json';
const ulTag = document.getElementById('states');

const fetchData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch {
        console.log(err);
    }
}

const createList = (states) => {
    const data = states.map(item => {
        const { state, code, nickname, website, capital_city, population, state_flag_url } = item;
        return `
            <li>
                <img src="${state_flag_url}" alt="${state}">
                <div>
                    <h4>${state} (${code})</h4>
                    <h5>Capital <span>${capital_city}</span></h5>
                    <h5>Nickname <span>${nickname}</span></h5>
                    <h5>Population <span>${population}</span></h5>
                    <a href="${website}">Website</a>
                </div>
            </li>
        `;
    }).join('');
    ulTag.innerHTML = `${data}`;
}

const init = async () => {
    const data = await fetchData();
    createList(data);
}

init()