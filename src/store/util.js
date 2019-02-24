import axois from 'axios'
import qs from 'qs'

const URL = `https://test.information.safety114.com/document`;

export const initData = ()=>{
    const url  = `${URL}/categories`;
    return axois.get(url)
}
export const search = (params)=>{
    let url = `${URL}/search?${qs.stringify(params)}`
    return axois.get(url)
}

export const getInitData = (id)=>{
    let url = `${URL}/search?category_id=${id}`
    return axois.get(url)
}

export const getAll = (data, callback)=>{
    const allAxios = []
    data.map(item =>{
        allAxios.push(getInitData(item.id))
    });

    if(allAxios.length != 0){
        axois.all(allAxios).then(axois.spread(function (...params) {
            let temp = params.map(i=> i.data.data.list)
            callback(temp)
        }));
    }
    return null;

}



export const getDetailData = (id)=>{
    let url =`${URL}/${id}`
    return axois.get(url)
}