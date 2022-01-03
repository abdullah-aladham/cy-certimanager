import React, { lazy, useState, useEffect } from 'react'

import {
  // CAvatar,
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartDoughnut } from '@coreui/react-chartjs'
// import { CChartLine } from '@coreui/react-chartjs'
// import { getStyle, hexToRgba } from '@coreui/utils'
// import CIcon from '@coreui/icons-react'
// import {
//   // cibCcAmex,
//   // cibCcApplePay,
//   // cibCcMastercard,
//   // cibCcPaypal,
//   // cibCcStripe,
//   // cibCcVisa,
//   cibGoogle,
//   cibFacebook,
//   cibLinkedin,
//   cifBr,
//   cifEs,
//   cifFr,
//   cifIn,
//   cifPl,
//   cifUs,
//   cibTwitter,
//   cilCloudDownload,
//   cilPeople,
//   cilUser,
//   cilUserFemale,
// } from '@coreui/icons'
import axios from 'axios'
// import avatar1 from 'src/assets/images/avatars/1.jpg'
// import avatar2 from 'src/assets/images/avatars/2.jpg'
// import avatar3 from 'src/assets/images/avatars/3.jpg'
// import avatar4 from 'src/assets/images/avatars/4.jpg'
// import avatar5 from 'src/assets/images/avatars/5.jpg'
// import avatar6 from 'src/assets/images/avatars/6.jpg'
// import Allcertsnum from '../api-routing/all-certsnum.js'
// import { get } from 'core-js/core/dict'
// import Datafetching from 'src/Datafetching.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  let all_cert_num = 'http://localhost/cystack/certimanager/public/get-all-num'
  const [number, setNumber] = useState([]) //used for fetching the certificates number
  const get_certs_num = () => {
    axios
      .get(all_cert_num)
      .then((res) => {
        //console.log(res)
        //setCertificate(res.data)
        setNumber(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  } //this function is used for fetching the number of  all certificates from laravel'
  useEffect(() => {
    get_certs_num()
  }, []) // this is hook for the number of all certificates
  let expired_num = 'http://localhost/cystack/certimanager/public/get-expired-num'
  const [expnumber, setExpNumber] = useState([]) //used for fetching the certificates number

  const get_expired_certs_num = () => {
    axios
      .get(expired_num)
      .then((res) => {
        //console.log(res)
        setExpNumber(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  } //function for expired certificates number
  useEffect(() => {
    get_expired_certs_num()
  }, []) //hook for expired certificates number
  let get_all = 'http://localhost/cystack/certimanager/public/display-all'

  const [certificate, setCertificate] = useState([]) //used for fetching the data about all certificates
  const fetch_all_certs = () => {
    axios
      .get(get_all)
      .then((res) => {
        console.log(res)
        setCertificate(res.data)
      }) //this function is for fetching all certificates
      .catch((err) => {
        console.error(err)
      })
  } //this fetch is used for loading the data to be fetched
  useEffect(() => {
    fetch_all_certs()
  }, []) //this useEffect hook is used for fetching all certificates
  let get_expired = 'http://localhost/cystack/certimanager/public/get-expired-num'
  const [expcertificate, setExpCertificate] = useState(0) //used for fetching the data about all certificates
  //const [expired, setExpired] = useState(0)
  console.log('Ibrahim')
  const get_expired_certs = () => {
    axios
      .get(get_expired)
      .then((res) => {
        console.log(res)
        expcertificate = setExpCertificate(res)
        console.log(expcertificate)
        // setCertificate(res.data)
        // setExpNumber(res.data)
        setExpCertificate(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  } //this function is used for get expired certificates
  // useEffect(() => {
  //   get_expired_certs()
  // }, []) //hook for expired certificates
  // let get_new = 'http://localhost/cystack/certimanager/public/display-new-certificates'
  // const [newcertificate, setNewCertificate] = useState([]) //used for fetching the data about new certificates

  // useEffect(() => {
  //   get_new_certs()
  // }, []) //hook for fetching new certs function

  // const get_new_certs = () => {
  //   axios
  //     .get(get_new)
  //     .then((res) => {
  //       console.log(res)
  //       // setCertificate(res.data)
  //       setNewCertificate(res.data)
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // } //function for fetching new certificates
  let new_num = 'http://localhost/cystack/certimanager/public/get-new-num'
  const [newnumber, setNewNumber] = useState([]) //used for fetching the new certificates number
  useEffect(() => {
    get_new_cert_num()
  }, []) //this is a hook for fetching new certificates number
  const get_new_cert_num = () => {
    axios
      .get(new_num)
      .then((res) => {
        console.log(res)
        setNewNumber(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  } //this is a hook for getting new certificates number from laravel api
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            {/* <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol> */}
          </CRow>
          <CCol xs={6}>
            <CCard className="mb-4">
              <CCardHeader>Certificates Chart</CCardHeader>
              <CCardBody>
                <CChartDoughnut
                  data={{
                    labels: ['New Certs', 'Expired Certificates'],
                    datasets: [
                      {
                        backgroundColor: ['#41B883', '#E46651'],
                        data: [expnumber, newnumber],
                      },
                    ],
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Certificates </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">id</CTableHeaderCell>
                    <CTableHeaderCell>Issuer name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Issuer id</CTableHeaderCell>
                    <CTableHeaderCell>Common Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Logged At</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Not Before</CTableHeaderCell>
                    <CTableHeaderCell>Not After</CTableHeaderCell>
                    <CTableHeaderCell>Serial number</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {certificate.map((certificate) => {
                    return (
                      <CTableRow key={certificate.id}>
                        <CTableDataCell>
                          {certificate.id}
                          <div className="small text-medium-emphasis"></div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          {certificate.Issuer_Name}
                          <div className="small text-medium-emphasis"></div>
                        </CTableDataCell>
                        <CTableDataCell>
                          {certificate.Issuer_id}
                          <div className="clearfix">
                            <div className="float-start">
                              <strong></strong>
                            </div>
                            <div className="float-end">
                              <small className="text-medium-emphasis"></small>
                            </div>
                          </div>
                          <CProgress thin />
                        </CTableDataCell>

                        <CTableDataCell className="text-center">
                          {certificate.Common_Name}
                        </CTableDataCell>
                        <CTableDataCell>
                          {certificate.Logged_At}
                          <div className="small text-medium-emphasis"></div>
                          <strong></strong>
                        </CTableDataCell>
                        <CTableDataCell>
                          {certificate.Not_Before}
                          <div></div>
                          <div className="small text-medium-emphasis"></div>
                        </CTableDataCell>
                        <CTableDataCell>
                          {certificate.Not_After}
                          <tr></tr>
                          <div className="small text-medium-emphasis"></div>
                        </CTableDataCell>
                        <CTableDataCell>
                          {certificate.serial_number}
                          <div></div>
                          <div className="small text-medium-emphasis"></div>
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        {/* <div>
          <ul>
            {certificate.map(certificate =><li key={certificate.id}>{certificate.Notbefore}</li>)}
            
          </ul>
        </div> */}
      </CRow>
    </>
  )
}
export default Dashboard
