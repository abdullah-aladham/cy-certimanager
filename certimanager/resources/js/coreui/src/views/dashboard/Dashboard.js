import React, { lazy, useState, useEffect } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
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
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import axios from 'axios'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
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
        // setCertificate(res.data)
        setNewNumber(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  } //this is a hook for getting new certificates number from laravel api
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  // const tableExample = [
  //   {
  //     avatar: { src: avatar1, status: 'success' },
  //     user: {
  //       name: 'Yiorgos Avraamu',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'USA', flag: cifUs },
  //     usage: {
  //       value: 50,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'success',
  //     },
  //     payment: { name: 'Mastercard', icon: cibCcMastercard },
  //     activity: '10 sec ago',
  //   },
  //   {
  //     avatar: { src: avatar2, status: 'danger' },
  //     user: {
  //       name: 'Avram Tarasios',
  //       new: false,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Brazil', flag: cifBr },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'info',
  //     },
  //     payment: { name: 'Visa', icon: cibCcVisa },
  //     activity: '5 minutes ago',
  //   },
  //   {
  //     avatar: { src: avatar3, status: 'warning' },
  //     user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
  //     country: { name: 'India', flag: cifIn },
  //     usage: {
  //       value: 74,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'warning',
  //     },
  //     payment: { name: 'Stripe', icon: cibCcStripe },
  //     activity: '1 hour ago',
  //   },
  //   {
  //     avatar: { src: avatar4, status: 'secondary' },
  //     user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
  //     country: { name: 'France', flag: cifFr },
  //     usage: {
  //       value: 98,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'danger',
  //     },
  //     payment: { name: 'PayPal', icon: cibCcPaypal },
  //     activity: 'Last month',
  //   },
  //   {
  //     avatar: { src: avatar5, status: 'success' },
  //     user: {
  //       name: 'Agapetus Tadeáš',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Spain', flag: cifEs },
  //     usage: {
  //       value: 22,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'primary',
  //     },
  //     payment: { name: 'Google Wallet', icon: cibCcApplePay },
  //     activity: 'Last week',
  //   },
  //   {
  //     avatar: { src: avatar6, status: 'danger' },
  //     user: {
  //       name: 'Friderik Dávid',
  //       new: true,
  //       registered: 'Jan 1, 2021',
  //     },
  //     country: { name: 'Poland', flag: cifPl },
  //     usage: {
  //       value: 43,
  //       period: 'Jun 11, 2021 - Jul 10, 2021',
  //       color: 'success',
  //     },
  //     payment: { name: 'Amex', icon: cibCcAmex },
  //     activity: 'Last week',
  //   },
  // ]

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
        <CCardFooter>
          {/* <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow> */}
        </CCardFooter>
      </CCard>

      <WidgetsBrand withCharts />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Certificates </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">All certificates</div>
                        <div className="fs-5 fw-semibold">{number}</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Expired certificates</div>
                        <div className="fs-5 fw-semibold">{expnumber}</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    {/* <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol> */}
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">New Certificates</div>
                        <div className="fs-5 fw-semibold">{newnumber}</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

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
                        {/*v-for="item in tableItems" */}
                        <CTableDataCell>
                          {/* {certificate.map((certificate) => {
                        return (
                          <tr key={certificate.Issuer_Name}>
                            <td>{certificate.id}</td>
                          </tr>
                        )
                      })} */}
                          <div className="small text-medium-emphasis">{certificate.id}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          {certificate.Issuer_Name}
                          {/* {certificate.map((certificate) => {
                        return <div key={certificate.id}>{certificate.Issuer_id}</div>
                      })} */}
                          {/* <div>{certificate.Issuer_Name}</div> */}
                          <div className="small text-medium-emphasis"></div>
                        </CTableDataCell>
                        <CTableDataCell>
                          {/* {certificate.map((certificate) => {
                        return <div key={certificate.id}>{certificate.Issuer_Name}</div>
                      })} */}
                          {/* {certificate.map((certificate) => {
                        return <div key={certificate.id}>{certificate.Issuer_id}</div>
                          })} */}
                          {certificate.Issuer_id}
                          <div className="clearfix">
                            <div className="float-start">
                              <strong></strong>
                            </div>
                            <div className="float-end">
                              <small className="text-medium-emphasis">
                                {/* {certificate.map((certificate) => {
                              return <div key={certificate.id}>{certificate.Issuer_Name}</div>
                            })} */}
                              </small>
                            </div>
                          </div>
                          <CProgress thin />
                        </CTableDataCell>

                        <CTableDataCell className="text-center">
                          {certificate.Common_Name}
                          {/* {certificate.map((certificate) => {
                          return <div key={certificate.id}>{certificate.Logged_At}</div>
                      })} */}
                        </CTableDataCell>
                        <CTableDataCell>
                          {certificate.Logged_At}
                          {/* {certificate.map((certificate) => {
                          return <div key={certificate.id}>{certificate.Not_Before}</div>
                      })} */}
                          <div className="small text-medium-emphasis"></div>
                          <strong></strong>
                        </CTableDataCell>
                        <CTableDataCell>
                          {certificate.Not_Before}
                          <div>
                            {/* {certificate.map((certificate) => {
                          return <div key={certificate.id}>{certificate.Not_After}</div>
                        })} */}
                          </div>
                          <div className="small text-medium-emphasis"></div>
                        </CTableDataCell>
                        <CTableDataCell>
                          {certificate.Not_After}
                          <tr>
                            {/* {certificate.map((certificate) => {
                          return <div key={certificate.id}>{certificate.serial_number}</div>
                        })} */}
                          </tr>
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
