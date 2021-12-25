import React ,{useState,useEffect }from 'react'
import axios from 'axios'

function datafetching() {
    let new_num = 'http://localhost/cystack/certimanager/public/get-new-num'
    let expired_num = 'http://localhost/cystack/certimanager/public/get-expired-num'
    let all_cert_num = 'http://localhost/cystack/certimanager/public/get-all-num'
    let get_all = 'http://localhost/cystack/certimanager/public/display-all'
    let get_expired = 'http://localhost/cystack/certimanager/public/display-expired'
    const [certificate,setCertificate]=useState([])//this usestate for newNum 
    useEffect(()=>{
        axios.get(get_all)
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    })
    return (
        <div>
            <li>
            certificate.map(certificate => <li key={certificate.id}></li>)
            </li>
        </div>
    )
}

export default datafetching
