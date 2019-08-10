import axios from 'axios';
// const URL = 'http://192.168.1.136:8081';
const URL = 'http://172.31.10.30:8081';
const options = {
    headers: {auth:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGVkb3pvLmNvbSIsImF1ZCI6IndlYiIsImxhc3QiOm51bGwsImlkIjoyNjUxLCJleHAiOjE1NjQ4MzA5MTUsImlhdCI6MTU2Mzk4MzExNSwiZmlyc3QiOm51bGx9.8AZfUx5-KcxXEj4jk2lqth9stH8roAqFY54Tg7_VgCgUOG4IedOh9PIbbcukfaA_inHUpOdt7wx61uLVHRpbHg'}
  };

export function checkPip(values){
    const request = axios.post(`${URL}/company/add`, values, options)
    return {
        type:'CHECK_PIP',
        payload:request
    }
}

export function copyTemplate(values){
    const request = axios.post(`${URL}/company/copyTemplates`, values, options)
    return {
        type:'COPY_TEMPLATE',
        payload:request
    }
}


export function copyCustomPrice(values){
    const request = axios.post(`${URL}/company/copyTemplates`, values, options)
    return {
        type:'COPY_TEMPLATE',
        payload:request
    }
}

