import axios from "axios";

export const createIncome = async (name, amount) => {
    const response = await axios.post("http://localhost:8080/api/customInput/createIncome", { name, amount }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    return response
}

export const createExpense = async (name, amount) => {
    const response = await axios.post("http://localhost:8080/api/customInput/createExpense", { name, amount }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response
}

export const getIncome = async () => {
    const response = await axios.get("http://localhost:8080/api/customInput/getIncome", {
        headers: {
            'Content-Type': 'application/json'
        }
    })


    return response.data
}


export const getExpanse = async () => {
    const response = await axios.get("http://localhost:8080/api/customInput/getExpense", {
        headers: {
            "Content-Type": "application/json"
        }
    })

    console.log(response);

    return response.data
}


export const deleteExpense = async (id) => {
    const response = await axios.delete(`http://localhost:8080/api/customInput/deleteExpense/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(response);

    return response.data
}


export const deleteIncome = async (id) => {
    const response = await axios.delete(`http://localhost:8080/api/customInput/deleteIncome/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response.data
}