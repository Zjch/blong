import Axios from 'axios'

const Request = ({url, method}) => {

    let config = {
        url: url,
        method: method,
    }

    return new Promise((resolve, reject) => {
        Axios.request({config}).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}


export default Request;